import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl text-compute-slate font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        CoMPuTE Talks
      </Link>
      .
    </h2>
  )
}

export default Header
