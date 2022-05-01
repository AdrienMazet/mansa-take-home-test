import { ReactNode } from 'react';
import styled from 'styled-components';

type AvatarProps = {
  children: ReactNode;
};

const StyledAvatar = styled.span`
  border-radius: 50%;
  padding: 10px;
  color: white;
  background-color: #6347d1;
`;

const Avatar: React.FC<AvatarProps> = ({ children }) => (
  <StyledAvatar>{children}</StyledAvatar>
);

export default Avatar;
