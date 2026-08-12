import Image from 'next/image'

export default function Home() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <Image
        src="/banner-home.jpg"
        alt="Home banner"
        width={1200}
        height={400}
      />
    </div>
  )
}
