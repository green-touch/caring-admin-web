import React from 'react';
import NoprofileUserIcon from './NoProfileUserIcon';

interface UserAvatarWithStatusProps {
  image?: string;
  connected: boolean;
}

const UserAvatarWithStatus: React.FC<UserAvatarWithStatusProps> = ({ image, connected }) => {
  return (
    <div className="relative w-[54px] h-[54px]">
      {image ? (
        <img
          src={image}
          alt="사용자 이미지"
          className="w-[54px] h-[54px] rounded-full bg-gray30 object-cover"
        />
      ) : (
        <NoprofileUserIcon />
      )}
      <div
        className="absolute top-0 left-0 w-4 h-4 rounded-full border-2 border-white"
        style={{ backgroundColor: connected ? '#1C711C' : '#555555' }}
      />
    </div>
  );
};

export default UserAvatarWithStatus;
