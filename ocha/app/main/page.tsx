"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Forward,
  LineSquiggle,
  Pin,
  UserRoundPlus,
  Share,
  Star,
  User,
  Users,
  UserRoundMinus,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  const posts = Array.from({ length: 5 });
  const [friendState, setFriendState] = useState("none");
  const availStates = ["none", "friend", "mutual", "remove"];
  function renderState(state: string) {
    if (state == "none") {
      return "Friend";
    } else if (state == "friend") {
      return "Friended";
    } else if (state == "remove") {
      return "Remove";
    } else {
      return "Mutuals";
    }
  }
  function renderButtonState(state: string) {
    if (state == "none") {
      return "outline";
    } else if (state == "friend") {
      return "secondary";
    } else if (state == "remove") {
      return "destructive";
    } else {
      return "default";
    }
  }
  function renderIconState(state: string) {
    if (state == "none") {
      return <UserRoundPlus />;
    } else if (state == "friend") {
      return <User />;
    } else if (state == "remove") {
      return <UserRoundMinus />;
    } else {
      return <Users />;
    }
  }
  return (
    <div className="ml-25 flex flex-col gap-4">
      {posts.map((_, i) => (
        <Card key={i} className="w-full max-w-150">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-30" />
              </div>
              <div className="ml-auto">
                <Button
                  variant={renderButtonState(friendState)}
                  onClick={() => {
                    if (friendState === "none") {
                      setFriendState("friend");
                    } else if (friendState === "friend") {
                      setFriendState("mutual");
                    } else if (friendState === "mutual") {
                      setFriendState("remove");
                    } else {
                      setFriendState("none");
                    }
                  }}
                >
                  {renderIconState(friendState)}
                  {renderState(friendState)}
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <Skeleton className="aspect-video h-50 w-full" />
          </CardContent>
          <CardFooter className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    className=" hover:border-red-500 "
                    variant="secondary"
                  >
                    <Share />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    className=" hover:border-red-500 "
                    variant="secondary"
                  >
                    <Forward />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Forward</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    className="hover:border-yellow-400 ml-auto"
                  >
                    <Star />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Like</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    className=" hover:border-green-500 "
                    variant="outline"
                  >
                    <LineSquiggle />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Repost</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button className=" hover:border-red-500 " variant="outline">
                    <Pin />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Save</p>
              </TooltipContent>
            </Tooltip>
          </CardFooter>
        </Card>
      ))}
      <div className="py-8 ml-60 text-sm text-muted-foreground">
        No more posts to view
      </div>
    </div>
  );
}
