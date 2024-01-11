import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false})
// The reason "dynamic" is used is because "map" will render in client side.

export default function Home() {
  return (
    <>
      <header style={{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: '#0d0d0d',
        fontSize: 20,
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        gap: 10,
      }}>
        <img src="/images/gobble.png" />
        <h1>Gobble Mops</h1>
      </header>
      <DynamicMap/>
    </>
  )
}
