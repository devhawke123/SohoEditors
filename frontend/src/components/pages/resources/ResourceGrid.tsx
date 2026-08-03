import Image from "next/image";
import pdfIcon from "@/assets/icons/pdf-icon.jpg";
import Button from "@/components/ui/Button";
import { RESOURCES, type Resource } from "@/data/resources";

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex min-h-[277px] flex-col rounded-[20px] bg-white p-7 shadow-[8px_8px_16px_rgba(0,0,0,0.1)] sm:p-8">
      <div className="flex items-start gap-2">
        <Image
          src={pdfIcon}
          alt=""
          width={35}
          height={45}
          className="h-[45px] w-[35px] shrink-0 object-contain"
        />
        <h3 className="text-feature-title font-bold text-black">
          {resource.title}
        </h3>
      </div>

      <p className="mt-6 text-center text-feature-title font-normal text-[#878c90]">
        Uploaded: {resource.uploadedAt}
      </p>

      <div className="mt-auto flex justify-center pt-8">
        <Button href={resource.href ?? "#"} className="min-w-[12.875rem]">
          Download &gt;
        </Button>
      </div>
    </article>
  );
}

export default function ResourceGrid() {
  return (
    <section className="page-x section-y">
      <div className="mx-auto grid max-w-page gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {RESOURCES.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}
