import Link from "next/link"
import {
  LayoutDashboard,
  UserRound,
  BookOpen,
  GraduationCap,
  Newspaper,
  CircleUserRound,
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
    <Sidebar className="!bg-gradient-to-b !from-pink-500 !via-rose-500 !to-pink-700 text-slate-900">
      
      <SidebarHeader className="!bg-gradient-to-b !from-pink-500 !via-rose-500 !to-pink-700 text-slate-900">
        <SidebarMenu>
          <SidebarMenuItem>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="!bg-gradient-to-b !from-pink-500 !via-rose-500 !to-pink-700 text-slate-900">
        <div className="flex items-center justify-center p-4"></div>
        <img src="/img/smk_mvp_ars_logo_white.png" alt="Logo" className="w-150 h-15 mx-auto mb-4 object-contain" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-pink-100">Menu Utama</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-pink-800 hover:text-white">
                <Link
                  href="/admin"
                  className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-pink-800 hover:text-white">
                <Link
                  href="/admin/User"
                  className="flex items-center gap-3">
                  <UserRound className="w-4 h-4" />
                  <span>User Management</span>
                </Link> 
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-pink-800 hover:text-white">
                <Link
                  href="/admin/category"
                  className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Category</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-pink-800 hover:text-white">
                <Link
                  href="/admin/jurusan"
                  className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Jurusan</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-pink-800 hover:text-white">
                <Link
                  href="/admin/artikel"
                  className="flex items-center gap-3">
                  <Newspaper className="w-4 h-4" />
                  <span>Artikel</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-white hover:bg-pink-800 hover:text-white">
                <Link
                  href="/admin/profile"
                  className="flex items-center gap-3">
                  <CircleUserRound className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="!bg-pink-800" />

    </Sidebar>
  )
}