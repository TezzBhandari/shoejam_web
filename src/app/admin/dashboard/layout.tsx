import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="mt-16 md:ml-[15rem] max-w-full">{children}</main>
    </>
  );
}
