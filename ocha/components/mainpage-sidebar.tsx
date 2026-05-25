"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Menu } from "@base-ui/react";
import { GalleryVerticalEnd, VerifiedIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronsUp,
  MessageCircle,
  Search,
  House,
  Circle,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  BadgeCheck,
  Bell,
  CreditCard,
  User,
  LogOut,
  Sparkles,
  Settings,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <ChevronsUp className="size-4" />
              </div>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">o!cha</span>
                <span className="truncate text-xs">Alpha Edition</span>
              </div>

              <Circle className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <House /> Home
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Search />
                  Search
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                {open ? (
                  <Collapsible>
                    <CollapsibleTrigger
                      render={
                        <Button
                          variant="ghost"
                          className="group w-full justify-start "
                        >
                          <MessageCircle />
                          Chat
                          <ChevronRight className="group-data-panel-open/button:rotate-90" />
                        </Button>
                      }
                    />
                    <CollapsibleContent className="mt-3">
                      <div className="flex flex-col gap-3">
                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                          <Skeleton className="size-8 shrink-0 rounded-full" />
                          <Skeleton className="h-4 flex-1" />
                        </SidebarMenuButton>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Collapsible>
                    <CollapsibleTrigger
                      render={
                        <Button variant="ghost" className="group w-full">
                          <MessageCircle />
                        </Button>
                      }
                    />
                    <CollapsibleContent className="mt-3">
                      <div className="flex flex-col gap-3">
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                        <SidebarMenuButton className="justify-center">
                          <Skeleton className="size-7 shrink-0 rounded-full" />
                        </SidebarMenuButton>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="group data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="https://github.com/godkama.png" />
                    </Avatar>

                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">kama</span>
                      <span className="truncate text-xs text-muted-foreground">
                        kama@example.com
                      </span>
                    </div>

                    <ChevronsUp className="ml-auto size-4" />
                  </SidebarMenuButton>
                }
              />

              <DropdownMenuContent
                side="top"
                align="end"
                sideOffset={4}
                className="min-w-56 rounded-lg"
              >
                <DropdownMenuItem>
                  <VerifiedIcon />
                  Verify
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <User />
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
