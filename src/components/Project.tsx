import Link from 'next/link'
import Image from 'next/image'

import imageProject from '../assets/imageProject.png'

interface ProjectProps {
  name: string
  description: string
}

export function Project(props: ProjectProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-cols max-w-[1220px] justify-around gap-14 px-4 lg:flex  ">
        <Image
          src={imageProject}
          alt={''}
          className="mb-10 w-[385px] rounded-md border border-gray-100 sm:w-[424px] lg:w-[458px]"
        />
        <Link href={'https://github.com/gabriels5g/nlw-space-time'}>
          <h1 className="mb-6 text-justify font-bold text-gray-50 underline underline-offset-8">
            {props.name}
          </h1>
          <p className="mb-10 text-gray-100">{props.description}</p>
        </Link>
      </div>
    </div>
  )
}
