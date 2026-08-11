export type VerificationTier = "unverified" | "nin" | "business" | "premium";

export interface Author {
  id: string;
  name: string;
  handle: string;
  avatarUrl?: string;
  verified: boolean;
  tier: VerificationTier;
  title?: string;
  rating?: number;
  ratingCount?: number;
  successRate?: number;
  responseTime?: string;
}

export interface Post {
  id: string;
  author: Author;
  timeAgo: string;
  title: string;
  description: string;
  location: string;
  price: number;
  productImageLabel: string;
  categoryId: string;
  comments: number;
  reposts: number;
  likes: number;
  images?: string[];
  specs?: string[];
  sponsored?: boolean;
  nearby?: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface StoryItem {
  id: string;
  label: string;
  isCreate?: boolean;
}

export type OrderStatus =
  | "waiting"
  | "in_transit"
  | "awaiting_confirmation"
  | "completed";

export interface Order {
  id: string;
  itemLabel: string;
  status: OrderStatus;
  statusLabel: string;
  amount: number;
  meta: string;
  progress?: number;
}

export interface Message {
  id: string;
  fromMe: boolean;
  text: string;
  timeAgo: string;
}

export interface Conversation {
  id: string;
  author: Author;
  lastMessage: string;
  timeAgo: string;
  unread?: number;
  category: "buyer" | "seller" | "system";
  messages: Message[];
}

export type NotificationType = "order" | "payment" | "message" | "promo";

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  detail: string;
  timeAgo: string;
}
