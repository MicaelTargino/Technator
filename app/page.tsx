import Image from "next/image";
import Geniuses from "@/public/geniuses.svg";
import { ButtonStart } from "@/components/ButtonStart";

export default  function Home() {

  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center gap-5 text-zinc-200 ">

      <section className="flex flex-col items-center justify-start gap-2">
        <h1 className="text-4xl drop-shadow-md font-bold text-center">Welcome to Technator</h1>
        <p className="text-lg">Think in a Computing History Character and I'll guess it.</p>
      </section>

    <ButtonStart />
    <Image alt="geniuses" className="mt-5" width={500}  src={Geniuses} />
    </main>
  );
}
