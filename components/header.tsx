import Link from 'next/link'

const Header = () => {
  return (
    <h1 className="text-2xl md:text-4xl text-compute-red font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        CoMPuTE Talks
      </Link>




    </h1>

      <h2 className="text-2xl md:text-4xl text-compute-red font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
       <img src="https://www.nihr.ac.uk/nihr-comms/images/visual-identity/logo/funded-by-nihr-logo.png" width="20%" height="20%" />
      </h2>
  )
}

export default Header
