import { StateCreator } from 'zustand';

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: Notification;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType
> = () => ({
  notification: {
    text: 'Notificación',
    error: false,
    show: true,
  },
});
