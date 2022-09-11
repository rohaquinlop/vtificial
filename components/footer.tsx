import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer : React.FC = () => {
  return (
    <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
      <Image src="/assets/logo.png" width={18} height={18} alt='logo'/>
      <Link href='/terms'>Terms</Link>
      <Link href='/privacy'>Privacy Policy</Link>
    </footer>
  )
}

export default Footer
