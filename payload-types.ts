/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    challenges: Challenge;
    diaries: Diary;
    meals: Meal;
    exercises: Exercise;
    workouts: Workout;
    weights: Weight;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  nickname: string;
  roles?: ('admin' | 'user')[] | null;
  avatar?: number | Media | null;
  exp?: number | null;
  level?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  gender?: ('male' | 'female') | null;
  biodata?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  weight?: number | null;
  height?: number | null;
  goal_type?: ('weight_loss' | 'muscle_gain' | 'running_distance')[] | null;
  goal_weight?: number | null;
  goal_daily_intake?: number | null;
  goal_exercise_calorie_burned?: number | null;
  goal_weekly_exercise?: number | null;
  goal_date?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  text?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    banner?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    avatar?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenges".
 */
export interface Challenge {
  id: number;
  title: string;
  type?: ('weight_loss' | 'muscle_gain' | 'running_distance') | null;
  status?: ('not_started' | 'ongoing' | 'completed') | null;
  start_date?: string | null;
  end_date?: string | null;
  participants?: (number | User)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "diaries".
 */
export interface Diary {
  id: number;
  user: number | User;
  title?: string | null;
  date: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snacks';
  total_calories?: number | null;
  meals?:
    | {
        meal?: (number | null) | Meal;
        number_of_servings?: number | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "meals".
 */
export interface Meal {
  id: number;
  title: string;
  type?: ('food' | 'drinks') | null;
  image?: number | Media | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  serving_size: string;
  calorie: number;
  carbs?: number | null;
  fat?: number | null;
  protein?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exercises".
 */
export interface Exercise {
  id: number;
  user: number | User;
  title?: string | null;
  date: string;
  total_calories?: number | null;
  total_duration?: number | null;
  workouts?:
    | {
        workout?: (number | null) | Workout;
        duration?: number | null;
        calorie_burned?: number | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "workouts".
 */
export interface Workout {
  id: number;
  title: string;
  type?: ('cardio' | 'strength') | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "weights".
 */
export interface Weight {
  id: number;
  user: number | User;
  title?: string | null;
  date: string;
  weight: number;
  photo?: number | Media | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}