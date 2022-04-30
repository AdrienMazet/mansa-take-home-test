import Image from 'next/image';
import logo from '../../public/logo_mansa.png';

const Header = () => <header style={{
    padding: '15px 0px 15px 50px',
    borderBottom: '1px solid #EEEBFA',
  }}
>
  <Image
    priority
    src={logo}
    alt="Logo de Mansa"
    height={32}
    width={115}
    quality={100}
  />
</header>

export default Header
