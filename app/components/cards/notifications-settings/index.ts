import { NotificationSettingType } from "@/app/components/cards";

export const Settings: NotificationSettingType[] = [
  {
    title: "Pause all",
    description: "Temporarily pause all notifications",
    enabled: false,
  },
  {
    title: "Followers",
    description: "Get notified when someone follows you",
    enabled: true,
  },
  {
    title: "Likes",
    description: "Get notified when someone likes your post",
    enabled: true,
  },
  {
    title: "Comments",
    description: "Get notified when someone comments on your post",
    enabled: false,
  },
  {
    title: "Mentions",
    description: "Get notified when someone mentions you in a post",
    enabled: true,
  },
  {
    title: "Messages",
    description: "Get notified when someone sends you a message",
    enabled: true,
  },
  {
    title: "Friend Requests",
    description: "Get notified when someone sends you a friend request",
    enabled: false,
  },
];
