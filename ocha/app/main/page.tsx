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
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

// ai generated mock data and function to generate it. DO NOT USE IN PROD
export const generateFriends = (length: number) => {
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

  return Array.from({ length }, (_, index) => {
    const name = sampleNames[index % sampleNames.length];

    const isFollowing = index % 2 === 0;
    const isFollower = index % 3 === 0;

    return {
      id: index + 1,
      name: `${name} #${index + 1}`,
      handle: `@${name.toLowerCase().replace(/\s+/g, "")}${index + 1}`,
      avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
      email: `user${index + 1}@example.com`,

      isFollowing,
      isFollower,
      isMutual: isFollowing && isFollower,
    };
  });
};

export const generatePosts = (
  length: number,
  friendsList?: ReturnType<typeof generateFriends>,
) => {
  const friends = friendsList || generateFriends(length);

  const sampleTexts = [
    "Just finished building a new feature in Next.js! Tailwind CSS v4 makes layout tweaking so much faster.",
    "Late night coding session. Anyone else using Base UI primitives lately? Loving the unstyled approach.",
    "Quick update from the team! We are rolling out our alpha release of o!cha today. Let us know what you think!",
    "Working on some UI designs for a dark mode layout. Red accents for destructive states hit differently.",
    "A quick coffee break before diving back into bug fixes and component refactoring.",
    "Does anyone have good recommendations for responsive sidebar layouts with collapsible states?",
    "Just pushing another update to main. Testing out feed post alignments and custom scrollbar behavior.",
    "Weekend coding hits different when everything just works on the first try.",
  ];

  return Array.from({ length }, (_, index) => {
    const friendAuthor = friends[index % friends.length];
    const hasImage = index % 2 === 0;

    return {
      id: index + 1,
      author: {
        id: friendAuthor.id,
        name: friendAuthor.name,
        handle: friendAuthor.handle,
        avatar: friendAuthor.avatar,
      },
      relationship: {
        isFollowing: friendAuthor.isFollowing,
        isFollower: friendAuthor.isFollower,
        isMutual: friendAuthor.isMutual,
      },
      content: sampleTexts[index % sampleTexts.length],
      image: hasImage
        ? `https://picsum.photos/seed/${index + 40}/800/450`
        : null,
      timestamp: `${(index % 12) + 1}h ago`,

      likesCount: (index * 7 + 3) % 42,
      repostsCount: (index * 3) % 15,

      isLiked: index % 3 === 1,
      isReposted: index % 5 === 0,
      isSaved: index % 4 === 0,
      isPinned: index === 0,
    };
  });
};

export default function Page() {
  const [posts, setPosts] = useState(() => {
    const friends = generateFriends(20);
    return generatePosts(40, friends);
  });

  function renderState(
    state: Record<string, boolean>,
    element: "button" | "icon" | "text",
  ) {
    const val: Record<string, Record<string, any>> = {
      button: {
        mutual: "default",
        following: "secondary",
        follower: "secondary",
        none: "outline",
      },
      icon: {
        mutual: <Users />,
        following: <User />,
        follower: <User />,
        none: <UserRoundPlus />,
      },
      text: {
        mutual: "Mutuals",
        following: "Friended",
        follower: "Friended You",
        none: "Friend",
      },
    };

    for (const [k, v] of Object.entries(state)) {
      if (v === true) {
        return val[element][k];
      }
    }
    return val[element]["none"];
  }

  function handleToggleFollow(postId: number) {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id !== postId) return post;
        const nextFollowing = !post.relationship.isFollowing;
        return {
          ...post,
          relationship: {
            ...post.relationship,
            isFollowing: nextFollowing,
            isMutual: nextFollowing && post.relationship.isFollower,
          },
        };
      }),
    );
  }

  // function renderState(state: string) {
  //   if (state == "none") {
  //     return "Friend";
  //   } else if (state == "friend") {
  //     return "Friended";
  //   } else if (state == "remove") {
  //     return "Remove";
  //   } else {
  //     return "Mutuals";
  //   }
  // }
  // function renderButtonState(state: string) {
  //   if (state == "none") {
  //     return "outline";
  //   } else if (state == "friend") {
  //     return "secondary";
  //   } else if (state == "remove") {
  //     return "destructive";
  //   } else {
  //     return "default";
  //   }
  // }
  // function renderIconState(state: string) {
  //   if (state == "none") {
  //     return <UserRoundPlus />;
  //   } else if (state == "friend") {
  //     return <User />;
  //   } else if (state == "remove") {
  //     return <UserRoundMinus />;
  //   } else {
  //     return <Users />;
  //   }
  // }

  return (
    <div className="mx-auto max-w-2xl items-center w-full flex flex-col gap-4">
      {posts.map((post) => {
        const mutual =
          post.relationship.isFollower && post.relationship.isFollowing;
        const following =
          post.relationship.isFollowing && !post.relationship.isFollower;
        const follower =
          !post.relationship.isFollowing && post.relationship.isFollower;
        const none =
          !post.relationship.isFollowing && !post.relationship.isFollower;

        const relations = {
          mutual: mutual,
          following: following,
          follower: follower,
          none: none,
        };

        return (
          <Card key={post.id} className="w-full max-w-150">
            <CardHeader>
              {" "}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={post.author.avatar} />
                </Avatar>
                <div className="space-y-2">{post.author.handle} </div>
                <div className="ml-auto">
                  <Button
                    variant={renderState(relations, "button")}
                    onClick={() => handleToggleFollow(post.id)}
                  >
                    {renderState(relations, "icon")}
                    {renderState(relations, "text")}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-card-foreground leading-relaxed">
                {post.content}
              </p>

              {post.image && (
                <div className="overflow-hidden rounded-md border">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={post.image}
                      alt="Post Media Attachment"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              )}
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
                    <Button
                      className=" hover:border-red-500 "
                      variant="outline"
                    >
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
        );
      })}
      <div className="py-8 text-sm text-center text-muted-foreground">
        No more posts to view
      </div>
    </div>
  );
}
