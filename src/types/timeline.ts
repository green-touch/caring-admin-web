export type TimelineTarget = {
  name: string;
};

export type TimelineLocation = {
  name: string;
};

export type TimelineParams = {
  target?: TimelineTarget;
  date?: string;
  location?: TimelineLocation;
};
