import devsocUrl from '../../../assets/logos/devsoc-logo.svg'

export const Logo = () => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
      }}
    >
      <img
        src={devsocUrl}
        alt="Devsoc logo"
        style={{ height: 24, width: 'auto', display: 'block' }}
      />
      <span
        fill="white" 
        style={{ 
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontSize: '18px',
          letterSpacing: '0.7px'
        }}
      >
        DevSoc
      </span>
    </div>
  )
}


