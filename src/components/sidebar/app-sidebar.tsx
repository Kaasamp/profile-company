import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  BookOpen,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export default function AppSidebar() {
  return (
    <Sidebar className="!bg-blue-600">
      
      <SidebarHeader className="!bg-blue-600 text-white">
        <SidebarMenu>
          <SidebarMenuItem>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="!bg-blue-600">
        <div className="flex items-center justify-center p-4"></div>
        <img src="/img/smk_mvp_ars_logo_white.png" alt="Logo" className="w-150 h-15 mx-auto mb-4 object-contain" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-100">Menu Utama</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-blue-700 hover:text-white">
                <Link
                  href="/admin"
                  className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-blue-700 hover:text-white">
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3">
                  <Users className="w-4 h-4" />
                  <span>Users</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-blue-700 hover:text-white">
                <Link
                  href="/admin/category"
                  className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Category</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="!bg-blue-600" />

    </Sidebar>
  )
}
