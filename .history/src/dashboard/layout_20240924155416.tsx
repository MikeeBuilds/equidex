
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div>
        Sidebar
        {children}
      </div>
    </html>
  );
}
