import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl text-compute-red font-bold tracking-tighter leading-tight md:pr-8">
        CoMPuTE
      </h1>
        <h1 className="text-5xl md:text-8xl text-compute-slate tracking-tighter leading-tight md:pr-8">
            Talks
        </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A Patient and Public Involvement and Engagement (PPIE) initiative by the{' '}
        <a
          href="https://github.com/CoMPuTEprogramme/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          CoMPuTE Programme
        </a>
        .
      </h4>
        <img src="https://www.nihr.ac.uk/nihr-comms/images/visual-identity/logo/funded-by-nihr-logo.png" width={20%} height={20%} />
    </section>
  )
}

export default Intro
