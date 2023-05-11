import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>. <Link href="/day">Day</Link>
    </div>
  )
}
