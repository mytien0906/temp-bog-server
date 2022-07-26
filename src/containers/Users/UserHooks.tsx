import { Avatar, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { TFunction } from 'i18next';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import md5 from 'md5';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { UserType } from '../../constants/type';

export const useDataStatus = (t: TFunction) => ({
  active: {
    color: 'success',
    text: t('users:data.status.active'),
  },
  inactive: {
    color: 'magenta',
    text: t('users:data.status.inactive'),
  },
  banned: {
    color: '#f500',
    text: t('users:data.status.banned'),
  },
});
export const useDataRole = (t: TFunction) => ({
  admin: {
    color: 'success',
    text: t('users:data.role.admin'),
  },
  member: {
    color: 'cyan',
    text: t('users:data.role.member'),
  },
  editor: {
    color: 'cyan',
    text: t('users:data.role.editor'),
  },
});
export const useColumns = (): ColumnsType<UserType> => {
  // const router = useRouter();
  const { t } = useTranslation();
  const status = useDataStatus(t);
  const role = useDataRole(t);
  const columns: ColumnsType<UserType> = useMemo(
    () => [
      {
        title: t(''),
        dataIndex: 'user_email',
        key: 'avatar',
        width: '5%',
        render: (user_email) => (
          <Avatar src={`https://www.gravatar.com/avatar/${md5(user_email)}?d=mp`} shape="square" />
        ),
      },
      {
        title: t('users:data.login'),
        dataIndex: 'user_login',
        key: 'user_login',
        width: '10%',
      },
      {
        title: t('users:data.name'),
        dataIndex: 'user_login',
        key: 'user_name',
        width: '10%',
      },
      {
        title: t('users:data.email'),
        dataIndex: 'user_email',
        key: 'user_email',
        width: '10%',
        render: (user_email) => <a href={`mailto:${user_email}`}>{user_email}</a>,
      },
      {
        title: t('users:data.role'),
        dataIndex: 'user_role',
        key: 'user_role',
        width: '10%',
        render: (user_role) => (
          <Tag color={(role as any)?.[user_role].color}>{(role as any)?.[user_role].text}</Tag>
        ),
      },
      {
        title: t('users:data.status'),
        dataIndex: 'user_status',
        key: 'user_status',
        width: '10%',
        render: (user_status) => (
          <Tag color={(status as any)?.[user_status].color}>
            {(status as any)?.[user_status].text}
          </Tag>
        ),
      },
      {
        title: t('users:data.registered'),
        dataIndex: 'user_registered',
        key: 'user_registered',
        width: '10%',
        render: (user_registered) => (
          <Typography.Text>{moment(Number(user_registered)).format('DD/MM/YYYY')}</Typography.Text>
        ),
      },
      {
        title: '',
        dataIndex: '_id',
        key: 'action',
        width: '10%',
        render: (_id) => (
          <Typography.Text>{moment(Number(user_registered)).format('DD/MM/YYYY')}</Typography.Text>
        ),
      },
    ],
    [],
  );
  return columns;
};
export default {};
