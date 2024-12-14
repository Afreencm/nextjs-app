import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        MY WEBSITE
      </h1>
      <Link href="/home">HOME</Link><br />
      <Link href="/aboutus">ABOUT US</Link><br />
      <Link href="/services">SERVICES</Link><br />
      <Link href="/contact">CONTACT</Link><br />
      <Link href="/support">SUPPORT</Link><br />
      <Link href="/careers">CAREERS</Link><br />
    </main>

  );
}
