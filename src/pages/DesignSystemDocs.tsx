import { useState } from 'react';
import { 
  Home, Send, Users, PieChart, User, Download, Scan,
  ArrowUpRight, ArrowDownLeft, ShoppingBag, Utensils, Car, Film
} from 'lucide-react';

export default function DesignSystemDocs() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'colors', label: 'Color System' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing & Layout' },
    { id: 'shadows', label: 'Shadows & Elevation' },
    { id: 'atoms', label: 'Atoms' },
    { id: 'molecules', label: 'Molecules' },
    { id: 'organisms', label: 'Organisms' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-card border-b-[3px] border-border z-50 flex items-center px-8">
        <h1 className="text-xl font-bold text-foreground">Design System V9</h1>
        <div className="ml-auto flex gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 text-sm font-semibold border-2 border-border rounded-lg transition-all ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground shadow-[3px_3px_0px_hsl(var(--border))]'
                  : 'bg-card text-foreground hover:shadow-[2px_2px_0px_hsl(var(--border))]'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="pt-20 pb-12">
        {activeSection === 'overview' && <OverviewSection />}
        {activeSection === 'colors' && <ColorSection />}
        {activeSection === 'typography' && <TypographySection />}
        {activeSection === 'spacing' && <SpacingSection />}
        {activeSection === 'shadows' && <ShadowsSection />}
        {activeSection === 'atoms' && <AtomsSection />}
        {activeSection === 'molecules' && <MoleculesSection />}
        {activeSection === 'organisms' && <OrganismsSection />}
      </main>
    </div>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-3xl font-bold text-foreground mb-4">Design System V9</h2>
        <p className="text-foreground text-base leading-relaxed mb-6">
          A comprehensive design system combining Indian Modern aesthetics with Neo-Brutalist design principles. 
          Built with React, TypeScript, and Tailwind CSS.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-background p-6 border-[3px] border-border rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-2">Design Philosophy</h3>
            <p className="text-foreground text-sm">Indian Modern + Neo-Brutalism</p>
          </div>
          <div className="bg-background p-6 border-[3px] border-border rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-2">Primary Colors</h3>
            <p className="text-foreground text-sm">Gold-based palette with vibrant accents</p>
          </div>
          <div className="bg-background p-6 border-[3px] border-border rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-2">Typography</h3>
            <p className="text-foreground text-sm">System fonts for optimal performance</p>
          </div>
          <div className="bg-background p-6 border-[3px] border-border rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-2">Components</h3>
            <p className="text-foreground text-sm">Atomic design structure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Color Section
function ColorSection() {
  const colors = {
    brand: [
      { name: 'Gold', var: '--brand-gold', hsl: '43 74% 49%', hex: '#B8860B' },
      { name: 'Gold Light', var: '--brand-gold-light', hsl: '43 74% 65%', hex: '#DAA520' },
      { name: 'Dark', var: '--brand-dark', hsl: '0 0% 25%', hex: '#404040' },
    ],
    vibrant: [
      { name: 'Coral', var: '--coral', hsl: '6 93% 71%', hex: '#FD8A8A' },
      { name: 'Coral Light', var: '--coral-light', hsl: '6 93% 85%', hex: '#FEB8B8' },
      { name: 'Purple', var: '--purple', hsl: '258 90% 66%', hex: '#6C63FF' },
      { name: 'Purple Light', var: '--purple-light', hsl: '258 90% 80%', hex: '#A29DFF' },
      { name: 'Teal', var: '--teal', hsl: '173 80% 40%', hex: '#14B8A6' },
      { name: 'Teal Light', var: '--teal-light', hsl: '173 80% 60%', hex: '#5EEAD4' },
      { name: 'Pink', var: '--pink', hsl: '340 82% 70%', hex: '#FF6B9D' },
      { name: 'Pink Light', var: '--pink-light', hsl: '340 82% 85%', hex: '#FFB3CC' },
    ],
    semantic: [
      { name: 'Success', var: '--success', hsl: '160 84% 39%', hex: '#10B981' },
      { name: 'Destructive', var: '--destructive', hsl: '0 84% 60%', hex: '#EF4444' },
    ],
    neutral: [
      { name: 'Background', var: '--background', hsl: '0 0% 100%', hex: '#FFFFFF' },
      { name: 'Foreground', var: '--foreground', hsl: '0 0% 25%', hex: '#404040' },
      { name: 'Border', var: '--border', hsl: '0 0% 25%', hex: '#404040' },
      { name: 'Card', var: '--card', hsl: '0 0% 100%', hex: '#FFFFFF' },
      { name: 'Muted', var: '--muted', hsl: '210 40% 96.1%', hex: '#F1F5F9' },
    ],
  };

  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      {/* Brand Colors */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Brand Colors</h2>
        <div className="grid grid-cols-3 gap-6">
          {colors.brand.map((color) => (
            <div key={color.name} className="space-y-3">
              <div 
                className="h-32 border-[3px] border-border rounded-xl shadow-[4px_4px_0px_hsl(var(--border))]"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <p className="font-bold text-foreground text-sm">{color.name}</p>
                <p className="text-muted-foreground text-xs font-mono">{color.var}</p>
                <p className="text-muted-foreground text-xs">{color.hsl}</p>
                <p className="text-muted-foreground text-xs">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vibrant Colors */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Vibrant Accent Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          {colors.vibrant.map((color) => (
            <div key={color.name} className="space-y-2">
              <div 
                className="h-24 border-[3px] border-border rounded-lg shadow-[3px_3px_0px_hsl(var(--border))]"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <p className="font-bold text-foreground text-xs">{color.name}</p>
                <p className="text-muted-foreground text-[10px] font-mono">{color.var}</p>
                <p className="text-muted-foreground text-[10px]">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Semantic Colors</h2>
        <div className="grid grid-cols-2 gap-6">
          {colors.semantic.map((color) => (
            <div key={color.name} className="space-y-3">
              <div 
                className="h-32 border-[3px] border-border rounded-xl shadow-[4px_4px_0px_hsl(var(--border))]"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <p className="font-bold text-foreground text-sm">{color.name}</p>
                <p className="text-muted-foreground text-xs font-mono">{color.var}</p>
                <p className="text-muted-foreground text-xs">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Typography Section
function TypographySection() {
  const scales = [
    { name: 'Display', size: '32px', weight: '700', usage: 'Hero headlines' },
    { name: 'H1', size: '24px', weight: '700', usage: 'Page titles' },
    { name: 'H2', size: '20px', weight: '700', usage: 'Section headers' },
    { name: 'H3', size: '18px', weight: '600', usage: 'Card titles' },
    { name: 'H4', size: '16px', weight: '600', usage: 'Labels' },
    { name: 'Body Large', size: '16px', weight: '400', usage: 'Emphasized body text' },
    { name: 'Body', size: '14px', weight: '400', usage: 'Default body text' },
    { name: 'Body Small', size: '13px', weight: '400', usage: 'Secondary text' },
    { name: 'Caption', size: '12px', weight: '600', usage: 'Captions, metadata' },
    { name: 'Micro', size: '11px', weight: '600', usage: 'Fine print' },
    { name: 'Tiny', size: '10px', weight: '700', usage: 'Badges, tags' },
  ];

  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Typography Scale</h2>
        <p className="text-foreground text-sm mb-8">System fonts for optimal performance and readability</p>
        
        <div className="space-y-6">
          {scales.map((scale) => (
            <div key={scale.name} className="border-b-2 border-border pb-6 last:border-0">
              <div className="flex items-baseline justify-between mb-2">
                <span 
                  className="text-foreground"
                  style={{ fontSize: scale.size, fontWeight: scale.weight }}
                >
                  The quick brown fox jumps
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="font-bold text-foreground">{scale.name}</span>
                <span>{scale.size}</span>
                <span>Weight: {scale.weight}</span>
                <span className="ml-auto italic">{scale.usage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Spacing Section
function SpacingSection() {
  const spacingScale = [
    { name: 'xs', value: '4px', class: 'w-1 h-1' },
    { name: 'sm', value: '8px', class: 'w-2 h-2' },
    { name: 'md', value: '12px', class: 'w-3 h-3' },
    { name: 'lg', value: '16px', class: 'w-4 h-4' },
    { name: 'xl', value: '20px', class: 'w-5 h-5' },
    { name: '2xl', value: '24px', class: 'w-6 h-6' },
    { name: '3xl', value: '32px', class: 'w-8 h-8' },
    { name: '4xl', value: '40px', class: 'w-10 h-10' },
  ];

  const radiusScale = [
    { name: 'None', value: '0px', size: 'rounded-none' },
    { name: 'Small', value: '8px', size: 'rounded-lg' },
    { name: 'Medium', value: '12px', size: 'rounded-xl' },
    { name: 'Large', value: '16px', size: 'rounded-2xl' },
    { name: 'XL', value: '20px', size: 'rounded-3xl' },
    { name: 'Full', value: '50%', size: 'rounded-full' },
  ];

  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      {/* Spacing Scale */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Spacing Scale</h2>
        <div className="space-y-6">
          {spacingScale.map((space) => (
            <div key={space.name} className="flex items-center gap-6">
              <div className="w-20 text-sm font-bold text-foreground">{space.name}</div>
              <div className="w-24 text-xs text-muted-foreground">{space.value}</div>
              <div className="flex-1 bg-background border-2 border-border rounded-lg p-4">
                <div className={`bg-primary ${space.class}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Border Radius</h2>
        <div className="grid grid-cols-3 gap-6">
          {radiusScale.map((radius) => (
            <div key={radius.name} className="text-center space-y-3">
              <div className="bg-background border-2 border-border p-8 rounded-xl flex items-center justify-center">
                <div 
                  className={`w-24 h-24 bg-primary border-[3px] border-border ${radius.size}`}
                />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{radius.name}</p>
                <p className="text-muted-foreground text-xs">{radius.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Shadows Section
function ShadowsSection() {
  const shadows = [
    { name: 'Small', value: '3px 3px 0px #2D3561', usage: 'Buttons, small cards' },
    { name: 'Medium', value: '4px 4px 0px #2D3561', usage: 'Cards, avatars' },
    { name: 'Large', value: '6px 6px 0px #2D3561', usage: 'Main containers' },
    { name: 'Colored', value: '4px 4px 0px rgba(45, 53, 97, 0.3)', usage: 'Floating elements' },
  ];

  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Shadow System (Neo-Brutalist)</h2>
        <p className="text-foreground text-sm mb-8">Offset shadows create depth and elevation</p>
        
        <div className="grid grid-cols-2 gap-8">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="space-y-4">
              <div className="bg-background border-2 border-border rounded-xl p-8 flex items-center justify-center">
                <div 
                  className="w-32 h-32 bg-primary border-[3px] border-border rounded-xl"
                  style={{ boxShadow: shadow.value }}
                />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{shadow.name}</p>
                <p className="text-muted-foreground text-xs font-mono mb-1">{shadow.value}</p>
                <p className="text-muted-foreground text-xs italic">{shadow.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Atoms Section
function AtomsSection() {
  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      {/* Avatars */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Avatar Component</h2>
        <div className="grid grid-cols-4 gap-6">
          {['sm', 'md', 'lg', 'xl'].map((size) => (
            <div key={size} className="text-center space-y-3">
              <div className="flex justify-center">
                <div 
                  className={`
                    ${size === 'sm' ? 'w-9 h-9 text-base' : ''}
                    ${size === 'md' ? 'w-11 h-11 text-xl' : ''}
                    ${size === 'lg' ? 'w-14 h-14 text-2xl' : ''}
                    ${size === 'xl' ? 'w-18 h-18 text-3xl' : ''}
                    rounded-full bg-coral flex items-center justify-center
                    font-bold text-white border-[3px] border-border
                    shadow-[4px_4px_0px_hsl(var(--border))]
                  `}
                >
                  A
                </div>
              </div>
              <p className="text-sm font-bold text-foreground uppercase">{size}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Badge Component</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm font-bold text-foreground">Success</span>
            <span className="px-3 py-1 bg-success text-white text-xs font-bold rounded-md uppercase">
              Completed
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm font-bold text-foreground">Warning</span>
            <span className="px-3 py-1 bg-[#FFD93D] text-[#1A1A1A] text-xs font-bold rounded-md uppercase">
              Pending
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-sm font-bold text-foreground">Error</span>
            <span className="px-3 py-1 bg-destructive text-white text-xs font-bold rounded-md uppercase">
              Failed
            </span>
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Icon Button Component</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <p className="text-sm font-bold text-foreground">Default</p>
            <div className="flex justify-center">
              <button className="w-11 h-11 border-2 border-border rounded-xl bg-card flex items-center justify-center">
                <Home size={22} className="text-muted-foreground" strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="text-center space-y-3">
            <p className="text-sm font-bold text-foreground">Colored</p>
            <div className="flex justify-center">
              <button className="w-11 h-11 border-[3px] border-border rounded-xl bg-primary shadow-[3px_3px_0px_hsl(var(--border))] flex items-center justify-center">
                <Send size={22} className="text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="text-center space-y-3">
            <p className="text-sm font-bold text-foreground">Ghost</p>
            <div className="flex justify-center">
              <button className="w-11 h-11 flex items-center justify-center">
                <Users size={22} className="text-muted-foreground" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Molecules Section
function MoleculesSection() {
  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      {/* Quick Action */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Action Component</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: Scan, label: 'SCAN', color: '#B8860B' },
            { icon: Send, label: 'PAY', color: '#DAA520' },
            { icon: Download, label: 'RECEIVE', color: '#B8860B' }
          ].map((action) => (
            <div key={action.label} className="flex flex-col items-center gap-2">
              <div 
                className="w-16 h-16 border-[3px] border-border rounded-2xl shadow-[4px_4px_0px_rgba(45,53,97,0.3)] flex items-center justify-center"
                style={{ backgroundColor: action.color }}
              >
                <action.icon size={28} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-bold text-foreground">{action.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Item */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Transaction Item Component</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-background border-2 border-border rounded-xl">
            <div className="w-12 h-12 rounded-full bg-pink border-[3px] border-border shadow-[3px_3px_0px_rgba(45,53,97,0.4)] flex items-center justify-center flex-shrink-0">
              <User size={24} color="#FFFFFF" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-foreground">Priya Sharma</p>
              <p className="text-xs text-muted-foreground">2:30 PM</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-success">+₹2,500</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-background border-2 border-border rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B35] border-[3px] border-border shadow-[3px_3px_0px_rgba(45,53,97,0.4)] flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={24} color="#FFFFFF" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-foreground">Amazon</p>
              <p className="text-xs text-muted-foreground">Shopping</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-destructive">-₹1,299</p>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Balance Card Component</h2>
        <div className="bg-primary border-[3px] border-border rounded-2xl p-6 shadow-[6px_6px_0px_rgba(45,53,97,0.4)]">
          <p className="text-sm font-semibold text-primary-foreground/80 mb-2">TOTAL BALANCE</p>
          <p className="text-4xl font-bold text-primary-foreground mb-6">₹45,678</p>
          <div className="flex gap-4">
            <div className="flex-1 bg-primary-foreground/20 border-2 border-primary-foreground/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpRight size={18} className="text-primary-foreground" strokeWidth={2.5} />
                <p className="text-xs font-semibold text-primary-foreground/80">INCOME</p>
              </div>
              <p className="text-lg font-bold text-primary-foreground">₹12,450</p>
            </div>
            <div className="flex-1 bg-primary-foreground/20 border-2 border-primary-foreground/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDownLeft size={18} className="text-primary-foreground" strokeWidth={2.5} />
                <p className="text-xs font-semibold text-primary-foreground/80">EXPENSE</p>
              </div>
              <p className="text-lg font-bold text-primary-foreground">₹8,320</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Organisms Section
function OrganismsSection() {
  return (
    <div className="max-w-[210mm] mx-auto px-8 space-y-8">
      {/* Header */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Header Component</h2>
        <div className="bg-background border-2 border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-purple border-[3px] border-border shadow-[4px_4px_0px_hsl(var(--border))] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">WELCOME BACK</p>
                <p className="text-base font-bold text-foreground">Arjun Mehta</p>
              </div>
            </div>
            <button className="w-11 h-11 border-2 border-border rounded-xl bg-card flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-success" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Bottom Navigation Component</h2>
        <div className="bg-background border-t-[3px] border-border rounded-t-xl p-4">
          <div className="flex items-center justify-around">
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: PieChart, label: 'Analytics', active: false },
              { icon: Send, label: 'Send', active: false },
              { icon: Users, label: 'Contacts', active: false },
              { icon: User, label: 'Profile', active: false },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  item.active ? 'bg-primary border-[3px] border-border shadow-[3px_3px_0px_hsl(var(--border))]' : ''
                }`}>
                  <item.icon 
                    size={22} 
                    className={item.active ? 'text-white' : 'text-muted-foreground'} 
                    strokeWidth={2.5} 
                  />
                </div>
                <span className={`text-[10px] font-bold ${
                  item.active ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {item.label.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-card border-[3px] border-border rounded-2xl p-8 shadow-[6px_6px_0px_hsl(var(--border))]">
        <h2 className="text-2xl font-bold text-foreground mb-6">Transaction List Component</h2>
        <div className="bg-background border-2 border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-base font-bold text-foreground">Recent Transactions</p>
            <button className="text-sm font-bold text-primary">SEE ALL</button>
          </div>
          {[
            { icon: User, name: 'Priya Sharma', time: '2:30 PM', amount: '+₹2,500', isUser: true, bg: '#FF6B9D' },
            { icon: Utensils, name: 'Swiggy', time: '12:15 PM', amount: '-₹450', isUser: false, bg: '#FC8019' },
            { icon: Car, name: 'Uber', time: 'Yesterday', amount: '-₹280', isUser: false, bg: '#000000' },
          ].map((txn, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-card border-2 border-border rounded-lg">
              <div 
                className={`w-10 h-10 border-[3px] border-border shadow-[3px_3px_0px_rgba(45,53,97,0.4)] flex items-center justify-center flex-shrink-0`}
                style={{ 
                  borderRadius: txn.isUser ? '50%' : '10px',
                  backgroundColor: txn.bg 
                }}
              >
                <txn.icon size={20} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">{txn.name}</p>
                <p className="text-xs text-muted-foreground">{txn.time}</p>
              </div>
              <p className={`text-sm font-bold ${
                txn.amount.startsWith('+') ? 'text-success' : 'text-destructive'
              }`}>
                {txn.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
