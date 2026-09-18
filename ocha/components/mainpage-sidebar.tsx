"use client";

import React, { useState } from "react";
import {
  Bell,
  ChevronRight,
  ChevronsUp,
  House,
  LogOut,
  MessageCircle,
  Search,
  Settings,
  User,
  VerifiedIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const generateFriends = (length: number) => {
  const sampleNames = [
    "Alex Johnson",
    "Sam Rivera",
    "Taylor Swift",
    "Jordan Lee",
    "Morgan Vance",
    "Casey Neistat",
    "Riley Reid",
    "Avery Davis",
    "Quinn Fabray",
    "Dakota Kai",
  ];

  return Array.from({ length }, (_, index) => ({
    id: index + 1,
    name: sampleNames[index % sampleNames.length] + ` #${index + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
    email: `user${index + 1}@example.com`,
  }));
};

export function AppSidebar() {
  const [showDialog, setShowDialog] = useState(false);
  const friends = generateFriends(50);
  const { open } = useSidebar();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu className="gap-2">
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
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="relative flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <House />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
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
                        <SidebarMenuButton className="group/button">
                          <MessageCircle />
                          Chat
                          <ChevronRight className="group-data-panel-open/button:rotate-90" />
                        </SidebarMenuButton>
                      }
                    />

                    <CollapsibleContent className="mt-2">
                      <div className="flex flex-col gap-2">
                        {friends.map((friend) => (
                          <SidebarMenuButton key={friend.id}>
                            <Avatar>
                              <AvatarImage src={friend.avatar} />
                            </Avatar>
                            {friend.name}
                          </SidebarMenuButton>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Collapsible>
                    <CollapsibleTrigger
                      render={
                        <SidebarMenuButton className="group justify-center">
                          <MessageCircle />
                        </SidebarMenuButton>
                      }
                    />

                    <CollapsibleContent className="mt-2">
                      <div className="flex flex-col gap-2">
                        {friends.map((friend) => (
                          <SidebarMenuButton
                            className="justify-center"
                            key={friend.id}
                          >
                            <Avatar>
                              <AvatarImage src={friend.avatar} />
                            </Avatar>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-10 -mt-12 h-12 bg-linear-to-t from-sidebar to-transparent" />

      <Separator />

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
                className="min-w-56 rounded-[14px] bg-sidebar/95 backdrop-blur-sm"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem className="rounded-[14px]">
                    <VerifiedIcon />
                    Verify
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem className="rounded-[14px]">
                    <User />
                    Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="rounded-[14px]"
                    onClick={() => setShowDialog(true)}
                  >
                    <Settings />
                    Settings
                  </DropdownMenuItem>

                  <DropdownMenuItem className="rounded-[14px]">
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem className="rounded-[14px] text-destructive hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive dark:hover:bg-destructive/20 dark:focus:bg-destructive/20 *:[svg]:text-destructive">
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={showDialog} onOpenChange={setShowDialog}>
              <DialogContent className="overflow-hidden p-0 md:h-125 md:max-w-175 lg:max-w-200 bg-background">
                <DialogTitle className="sr-only">Settings</DialogTitle>
                <DialogDescription className="sr-only">
                  Customize Settings here.
                </DialogDescription>

                <SidebarProvider className="items-start min-h-full h-full">
                  <Sidebar collapsible="none" className="hidden md:flex h-full">
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>Profile</SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                  </Sidebar>

                  <main className="flex h-full flex-1 flex-col overflow-hidden bg-background">
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                      <div className="flex items-center gap-2 px-4">
                        <Breadcrumb>
                          <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                              <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                              <BreadcrumbPage>Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
                      </div>
                    </header>

                    <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
                      {/* put any content over here, in a div? */}
                    </div>
                  </main>
                </SidebarProvider>
              </DialogContent>
            </Dialog>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
