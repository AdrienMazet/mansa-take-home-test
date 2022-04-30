import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => <main style={{ backgroundColor: '#F9F9F9', paddingLeft: 50, flexGrow: 1 }}>
  {children}
</main>

export default Main
