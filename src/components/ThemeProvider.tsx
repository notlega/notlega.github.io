import type { ReactNode } from 'react';
import { ThemeProvider as MTThemeProvider } from '@material-tailwind/react';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <MTThemeProvider>{children}</MTThemeProvider>
);

export default ThemeProvider;
