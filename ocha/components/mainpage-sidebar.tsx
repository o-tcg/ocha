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
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
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
    // pravatar.cc generates stable dynamic random avatars based on img ID
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
      <SidebarContent className="relative flex-1 overflow-y-auto">
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
                        <Button variant="ghost" className="group w-full">
                          <MessageCircle />
                        </Button>
                      }
                    />
                    <CollapsibleContent className="mt-3">
                      <div className="flex flex-col gap-3">
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
      <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-12 -mt-12 bg-linear-to-t from-sidebar to-transparent z-10" />
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
                className="min-w-56 rounded-lg"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <VerifiedIcon />
                    Verify
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
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
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive dark:focus:bg-destructive/20 *:[svg]:text-destructive">
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
