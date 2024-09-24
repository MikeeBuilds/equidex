
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex ">
        {/* LEFT SIDE */}
        <div className="w-1/6">left</div>
        {/* RIGHT SIDE */}
        <div className="w-5/6">right</div>
      </div>
    </html>
  );
}
 