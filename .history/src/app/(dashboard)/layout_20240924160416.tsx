
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex ">
        {/* LEFT SIDE */}
        <div className="w-1/6 bg-text-red-200">l</div>
        {/* RIGHT SIDE */}
        <div className="w-5/6 bg-blue-red-200">r</div>
      </div>
    </html>
  );
}
 