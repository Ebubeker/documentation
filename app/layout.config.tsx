import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import LogoDark from '@/lib/assets/logo-white.png';
import LogoWhite from '@/lib/assets/logo.png';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src={LogoDark} alt='Dark mode logo.' className='hidden dark:block' width={100}/>
        <Image src={LogoWhite} alt='Light mode logo.' className="dark:hidden" width={100}/>                                
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
