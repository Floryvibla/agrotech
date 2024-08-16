import { SideNav } from "@/components/side-nav";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col xl:flex-row">
        <div className="xl:flex items-center justify-center xl:p-2">
            <SideNav />
        </div>
        {/* <div className="w-full h-full bg-red-400">
            yess
        </div> */}
        <div className="flex-1 p-2">
            {children}
        </div>
    </div>
  )
}
