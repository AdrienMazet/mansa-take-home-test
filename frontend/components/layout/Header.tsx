import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/logo_mansa.png';

const StyledHeader = styled.header`
  padding: 15px 0px 15px 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerBorder};
`;

const Header = () => (
  <StyledHeader>
    <Image
      priority
      src={logo}
      alt="Logo de Mansa"
      height={32}
      width={115}
      quality={100}
    />
  </StyledHeader>
);

export default Header;