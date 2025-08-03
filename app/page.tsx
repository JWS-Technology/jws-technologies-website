import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Kompaaz</h1>
      <Image src="/kompaaz.png" alt="Logo" width={250} height={250} />
    </div>
  );
}
