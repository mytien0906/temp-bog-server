// Du lieu tra ve,
export type UserStatusType = 'active' | 'inactive' | 'banned';
export type UserRoleType = 'member' | 'admin' | 'editor';

export type UserType = {
  _id: string,
  user_login: string,
  user_email: string,
  user_registered: string,
  user_role: UserRoleType,
  user_status: UserStatusType,
};
