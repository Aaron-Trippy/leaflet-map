import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false})
// The reason "dynamic" is used is because "map" will render in client side.

export default function Home() {
  return (
    <DynamicMap/>
  )
}
