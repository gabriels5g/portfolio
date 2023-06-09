'use client'

import rectangle from '../assets/Rectangle.png'
import bgLanguages from '../assets/bg-languages.svg'
import Image from 'next/image'
import { Project } from '@/components/Project'
import { Header } from '@/components/Header'
import { Widget } from '@/components/Widget'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center">
        <div className="mt-48 flex justify-around px-8 md:mt-60">
          <div className="mr-20 flex flex-col">
            <h1 className="whitespace-nowrap text-4xl font-bold text-gray-50 lg:text-[4rem]">
              Gabriel da Silva
            </h1>
            <div className="mt-6">
              <p className="text-base font-bold text-gray-50 lg:text-2xl">
                Software Engineer
              </p>
              <p className="mt-6 text-left text-base text-gray-100 md:max-w-xs">
                Foco em experiência do usuario, desempenho da Web e engenharia
                de interface do usuário.
              </p>
            </div>
          </div>
          <Image
            src={rectangle}
            alt=""
            className="hidden w-[50%] max-w-[480px] sm:flex"
          />
        </div>
        <Widget />
        <div className="-z-10 mt-20 flex w-full justify-center overflow-hidden border-t border-gray-700">
          <Image src={bgLanguages} width={1280} height={200} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="mb-20 text-3xl font-bold text-white">Projetos</h1>
          {/* {'Project'} */}
          <Project
            name="NLW Space Time"
            description="uma capsula do tempo muito legal, com Next.js e Tailwind"
          />
          <Project
            name="NLW Copa"
            description="vamos criar um bolão com Next.js e Tailwind e React Native"
          />
        </div>
      </main>
    </>
  )
}
