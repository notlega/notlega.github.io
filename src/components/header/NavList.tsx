import { Typography } from '@material-tailwind/react';

const NavList = () => (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      className="p-1 font-small"
    >
      <a href="#profile" className="flex items-center">
        Profile
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      className="p-1 font-normal"
    >
      <a href="#skills" className="flex items-center">
        Skills
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      className="p-1 font-normal"
    >
      <a href="##" className="flex items-center">
        Education
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      className="p-1 font-normal"
    >
      <a href="##" className="flex items-center">
        Experience
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      className="p-1 font-normal"
    >
      <a href="#contact-me" className="flex items-center">
        Contact Me
      </a>
    </Typography>
  </ul>
);

export default NavList;
