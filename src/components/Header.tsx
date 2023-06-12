import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed z-10 flex  h-28 w-full items-center justify-center border-b border-gray-700 px-4 backdrop-blur-md">
      <div className="flex w-[1280px] items-center justify-between">
        <Image
          alt=""
          src={'https://avatars.githubusercontent.com/u/102326117?v=4'}
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className=" flex gap-14 text-base text-gray-50">
          <Link href={'/home'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/faq'}>FAQ</Link>
        </div>
      </div>
    </header>
  )
}
