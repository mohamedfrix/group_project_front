import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";

function ResearchPapersPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div
          className={`w-full grid grid-rows-1 grid-cols-[fit-content(100%)_auto]`}
        >
          <SidebarTrigger className={`row-start-1 col-start-1`} />
          <div className={`w-full row-start-1 col-start-2`}>{children}</div>
        </div>
      </SidebarProvider>
    </>
  );
}
export default ResearchPapersPageLayout;