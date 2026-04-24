import Image from "next/image";

export default function Logo() {
  return (
    <div className="inline-flex" aria-label="Amerta">
      <Image
        src="/logo.png"
        alt="Amerta Logo"
        width={50}
        height={50}
        className="h-14 w-auto"
        priority
      />
    </div>
  );
}
