import { Timestamp } from 'firebase/firestore';

export type User = {
  id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  finger: boolean;
  photo: string;
  gender: 'Male' | 'Female' | null;
  preferences: Array<{ title: string; selected: boolean }>;
  interests: Array<{ title: string; selected: boolean; icon: string }>;
  healthData: Array<HealthData>;
  storiesWatched: Array<string>;
  notifications: NotificationsData;
  createdOn: string;
};
export type NotificationsData = Array<NotificationData>;
export type NotificationData = {
  userId: string;
  message: string;
  createdOn: string;
  isUnread: boolean;
  isShownViaPushNotification: boolean;
};
export type HealthData = {
  nutrition: number;
  todaysSteps: number;
  waterIntake: number;
  hasPermission: boolean;
  goal: {
    totalCalorie: number;
    noOfGlasses: number;
    totalSteps: number;
  };
  currentDate: string;
};

export type Post = {
  photo: string;
  caption: string;
  createdOn: Timestamp;
  userId: string;
  userName: string;
  userPhoto: string;
  likedByUsersId: Array<string>;
  comments: Array<Comment>;
  postId?: string;
};

export type Comment = {
  userId: string;
  comment: string;
  createdOn: Timestamp;
};

export type UserFromFirebaseDb = Omit<
  Omit<User, 'createdOn'>,
  'notifications'
> & {
  createdOn: Timestamp;
  notifications: Array<NotificationDataFirebaseDB>;
};
export type NotificationDataFirebaseDB = Omit<NotificationData, 'createdOn'> & {
  createdOn: Timestamp;
};

export type Story = {
  stories: { storyUrl: string; storyType: string; storyCreatedOn: string }[];
  userName: string;
  userPhoto: string;
  storyByUserId: string;
  latestStoryOn: Timestamp;
};
