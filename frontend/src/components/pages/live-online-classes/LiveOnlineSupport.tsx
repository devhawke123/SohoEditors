import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/heroImage.jpg";

export default function LiveOnlineSupport() {
  return (
    <section className="page-x section-y pt-0">
      <div className="mx-auto flex max-w-page flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-[74px]">
        <div className="relative aspect-[601/674] w-full max-w-[601px] flex-1 overflow-hidden rounded-[10px]">
          <Image
            src={heroImage}
            alt="One-to-one virtual technical support session"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 601px"
          />
        </div>

        <div className="flex max-w-[591px] flex-1 flex-col gap-6 md:gap-8">
          <h2 className="text-[clamp(2rem,4vw+0.5rem,4rem)] font-bold text-black">
            Support
          </h2>
          <div className="flex flex-col gap-5 text-section-body text-[#404145]">
            <p>
              Introducing Soho Editors Virtual Online Technical Support. Connect
              one to one with an industry professional online to help you with
              your Post Production questions, whether to start your edit, or
              finish your project.
            </p>
            <p>
              You can book sessions from as little as an hour to as long as you
              need. Our virtual online platform gives you access to our myriad
              of professional freelance talent, allowing them to talk you
              through the task, show you how to achieve your goal, or even take
              over your machine and get you over that last hurdle before
              export.{" "}
              <Link
                href="#"
                className="font-bold underline underline-offset-2 transition-colors hover:text-brand"
              >
                Contact us to find out more.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
