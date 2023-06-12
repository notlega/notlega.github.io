import { Typography } from '@material-tailwind/react';

const Footer = () => (
  <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-2 px-4 lg:px-8 lg:py-4 text-center md:justify-between">
    <Typography>&copy; 2023 Ong Hin Journ</Typography>
    <Typography>Powered by Astro, made in a single day</Typography>
  </div>
);

export default Footer;
