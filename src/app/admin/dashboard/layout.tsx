import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header />
      <div className="container flex items-start w-full border-2 border-red-600">
        <div className="sidebar-height sticky min-w-[15rem] bg-[#EBEBEB] top-16">
          <Sidebar />
        </div>
        <main className="flex-1 bg-[#F7F7F7] p-4">{children}</main>
      </div> */}
      <Header />
      <Sidebar />
      <main className="mt-16 md:ml-[16.666667%]">{children}</main>
    </>
  );
}
