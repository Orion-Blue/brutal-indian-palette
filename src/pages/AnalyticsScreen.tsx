import BottomNav from '@/components/BottomNav';

export default function AnalyticsScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFF5E0',
      color: '#1A1A1A',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '428px',
      margin: '0 auto',
      paddingBottom: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '800',
          margin: '0 0 16px 0',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#1A1A1A',
          letterSpacing: '-0.5px'
        }}>Analytics</h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#808080',
          fontWeight: '600'
        }}>Coming Soon</p>
      </div>
      <BottomNav />
    </div>
  );
}
