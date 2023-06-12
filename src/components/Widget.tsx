import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function Widget() {
  return (
    <div className="group fixed bottom-[10%] left-[5%] flex h-12 items-center rounded-full bg-gray-500 px-3 text-white">
      <GithubLogo
        color="#A8A8B3"
        className="h-6 w-6 transition-colors hover:fill-white"
      />
      <Link
        href={'https://github.com/gabriels5g'}
        className="max-w-0 overflow-hidden transition-all duration-700 ease-linear group-hover:max-w-xs"
      >
        <span className="pl-2"></span>
        Github
      </Link>
    </div>
  )
}
