import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex ">
        {/* LEFT SIDE */}
        <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%]  bg-red-200">
        <Link href="/" className="flex items-center justify-center gap-2">
        <Image src="/logo.png" alt="logo" width={75} height={75} />
        <span className="hidden lg:block">EQUIDEX</span>
        </Link>
        </div>
        {/* RIGHT SIDE */}
        <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>
      </div>
    </html>
  );
}
 