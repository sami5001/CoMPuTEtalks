import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl text-compute-red font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        CoMPuTE
      </Link>

    </h2>
      <h2 className="text-2xl md:text-4xl text-compute-slate tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Talks
      </Link>

    </h2>
  )
}

export default Header
