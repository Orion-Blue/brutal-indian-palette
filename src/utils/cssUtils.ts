export type Bounds = { width: number; height: number };

export type TokenManifest = {
  colors?: Record<string, string>;
  typography?: Record<string, { fontSize: string; lineHeight: number; fontWeight: number }>;
  spacing?: Record<string, number>;
  elevation?: Record<string, string>;
};

export function toHex(rgb: string): string | null {
  // Accepts formats like: rgb(255, 255, 255) or rgba(255,255,255,1)
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i);
  if (!m) return null;
  const r = parseInt(m[1], 10);
  const g = parseInt(m[2], 10);
  const b = parseInt(m[3], 10);
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`.toLowerCase();
}

export function px(n: number | string | null | undefined): string | null {
  if (n == null) return null;
  const v = typeof n === 'string' ? parseFloat(n) : n;
  if (Number.isNaN(v)) return null;
  return `${v}px`;
}

const PROPS_TO_CAPTURE = [
  'display','position','top','right','bottom','left','z-index',
  'width','height','min-width','max-width','min-height','max-height',
  'padding','padding-top','padding-right','padding-bottom','padding-left',
  'margin','margin-top','margin-right','margin-bottom','margin-left',
  'gap','row-gap','column-gap',
  'flex','flex-grow','flex-shrink','flex-basis','align-items','justify-content','align-self','justify-self','place-items','place-content','order',
  'grid-template-columns','grid-template-rows','grid-column','grid-row',
  'border','border-top','border-right','border-bottom','border-left','border-radius',
  'box-shadow',
  'background','background-color','background-image','background-size','background-position','background-repeat',
  'color','opacity',
  'font-family','font-size','font-weight','line-height','letter-spacing','text-transform','text-align','white-space',
  'transform'
];

export type NodeStyles = Record<string, string>;

export function collectComputed(element: Element): NodeStyles {
  const style = getComputedStyle(element as HTMLElement);
  const out: NodeStyles = {};
  for (const prop of PROPS_TO_CAPTURE) {
    const v = style.getPropertyValue(prop);
    if (v && v.trim() !== '') out[prop] = v.trim();
  }
  return out;
}

export function elementBounds(el: HTMLElement): Bounds {
  const r = el.getBoundingClientRect();
  return { width: Math.round(r.width), height: Math.round(r.height) };
}

export type TokenHit = { value: string; token?: string; suggestedToken?: string };

export type TokenMap = {
  colors: Record<string, TokenHit>;
  spacing: Record<string, TokenHit>;
  elevation: Record<string, TokenHit>;
  typography: Record<string, TokenHit>;
};

export function buildTokenIndex(manifest: TokenManifest){
  const idx = { colors: new Map<string,string>(), spacing: new Map<number,string>(), elevation: new Map<string,string>(), typography: new Map<string,string>() };
  if (manifest.colors) {
    for (const [k,v] of Object.entries(manifest.colors)) idx.colors.set(v.toLowerCase(), k);
  }
  if (manifest.spacing) {
    for (const [k,v] of Object.entries(manifest.spacing)) idx.spacing.set(v, k);
  }
  if (manifest.elevation) {
    for (const [k,v] of Object.entries(manifest.elevation)) idx.elevation.set(v, k);
  }
  if (manifest.typography) {
    for (const [k,v] of Object.entries(manifest.typography)) idx.typography.set(`${v.fontSize}|${v.fontWeight}|${v.lineHeight}`, k);
  }
  return idx;
}

export function mapTokens(styles: Record<string,string>, manifest: TokenManifest): TokenMap {
  const out: TokenMap = { colors: {}, spacing: {}, elevation: {}, typography: {} };
  const idx = buildTokenIndex(manifest);

  // Colors: try color, background-color, border-color inside border, box-shadow rgba
  const colorProps = ['color','background-color'];
  for (const p of colorProps) {
    const val = styles[p];
    if (!val) continue;
    const hex = toHex(val) || val.toLowerCase();
    const token = idx.colors.get(hex) || idx.colors.get(val.toLowerCase());
    out.colors[p] = { value: val, token: token || undefined, suggestedToken: token ? undefined : 'color-custom' };
  }

  // Spacing: padding/margin shorthands – extract pixel numbers
  const spaceProps = ['padding','padding-top','padding-right','padding-bottom','padding-left','margin','margin-top','margin-right','margin-bottom','margin-left','gap','row-gap','column-gap'];
  for (const p of spaceProps) {
    const val = styles[p];
    if (!val) continue;
    const pxMatch = val.match(/(\d+\.?\d*)px/g);
    if (!pxMatch) continue;
    const size = parseFloat(pxMatch[0]);
    let tokenKey = idx.spacing.get(size);
    out.spacing[p] = { value: val, token: tokenKey, suggestedToken: tokenKey ? undefined : 'space-custom' };
  }

  // Elevation
  if (styles['box-shadow']){
    const v = styles['box-shadow'];
    const token = idx.elevation.get(v);
    out.elevation['box-shadow'] = { value: v, token: token || undefined, suggestedToken: token ? undefined : 'elevation-custom' };
  }

  // Typography: font-size, weight, line-height trio
  const fs = styles['font-size'];
  const fw = styles['font-weight'];
  const lh = styles['line-height'];
  if (fs && fw && lh){
    const key = `${fs}|${parseInt(fw,10)||fw}|${isNaN(parseFloat(lh))? lh : parseFloat(lh)}`;
    // try map using manifest.typography values which are in px and numbers
    let hit: string | undefined;
    if (manifest.typography){
      for (const [k,v] of Object.entries(manifest.typography)){
        const k2 = `${v.fontSize}|${v.fontWeight}|${v.lineHeight}`;
        if (k2 === `${fs}|${parseInt(fw,10)||fw}|${isNaN(parseFloat(lh))? lh : parseFloat(lh)}`){ hit = k; break; }
      }
    }
    out.typography['typography'] = { value: `${fs}/${lh} ${fw}`, token: hit, suggestedToken: hit ? undefined : 'type-custom' };
  }

  return out;
}

export function diffStyles(a: Record<string,string>, b: Record<string,string>): Record<string, { from: string; to: string }>{
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  const diff: Record<string, { from: string; to: string }> = {};
  for (const k of keys){
    if ((a as any)[k] !== (b as any)[k]){
      diff[k] = { from: (a as any)[k], to: (b as any)[k] };
    }
  }
  return diff;
}

export function inlineComputedRecursive(el: HTMLElement){
  const styles = collectComputed(el);
  for (const [k,v] of Object.entries(styles)){
    try { (el.style as any).setProperty(k, v); } catch {}
  }
  const children = Array.from(el.children) as HTMLElement[];
  for (const c of children) inlineComputedRecursive(c);
}

export function serializeHtmlWithInlineStyles(root: HTMLElement){
  const clone = root.cloneNode(true) as HTMLElement;
  inlineComputedRecursive(clone);
  const html = `<!doctype html>\n<html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Snapshot</title></head><body style=\"margin:0;\">${clone.outerHTML}</body></html>`;
  return html;
}
