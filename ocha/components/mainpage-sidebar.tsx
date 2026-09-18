"use client";

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
                        <SidebarMenuButton className="group">
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

                  <DropdownMenuItem className="rounded-[14px]">
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
