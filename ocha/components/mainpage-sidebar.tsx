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
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronRight, MessageCircle, Search, House } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="p-2 group-data-[state=collapsed]:hidden font-bold text-xl">
          o!cha
        </div>
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
                    <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
                      <SidebarMenuButton>
                        <Avatar>
                          {" "}
                          <AvatarImage src="https://github.com/godkama.png" />
                        </Avatar>
                        kama
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Avatar>
                          {" "}
                          <AvatarImage src="https://github.com/virtualwinter.png" />
                        </Avatar>
                        vWinter
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Avatar>
                          {" "}
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        shadcn
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Avatar>
                          {" "}
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        shadcn
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Avatar>
                          {" "}
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        shadcn
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Avatar>
                          {" "}
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        shadcn
                      </SidebarMenuButton>
                      <SidebarMenuButton>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        shadcn
                      </SidebarMenuButton>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton tooltip="Chat">
                    <MessageCircle />
                    <span>Chat</span>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
