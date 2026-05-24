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
} from "lucide-react";

export default function Page() {
  const posts = Array.from({ length: 5 });

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
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="outline">
                        <UserRoundPlus /> Friend
                      </Button>
                    }
                  />
                  <TooltipContent>
                    <p>Friend</p>
                  </TooltipContent>
                </Tooltip>
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
                  <Button variant="outline">
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
                  <Button variant="outline">
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
                  <Button variant="outline" className="ml-auto">
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
                  <Button variant="outline">
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
                  <Button variant="outline">
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
