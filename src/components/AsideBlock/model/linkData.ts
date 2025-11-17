import SteamSvg from '@/shared/assets/images/icons/links/steam.svg';
import GitHubSvg from '@/shared/assets/images/icons/links/github.svg';
import TelegramSvg from '@/shared/assets/images/icons/links/telegram.svg';

interface ILinkDataProps {
  href: string;
  image: string;
}

export const linkData: ILinkDataProps[] = [
  {
    href: '#',
    image: GitHubSvg,
  },
  {
    href: '#',
    image: TelegramSvg,
  },
  {
    href: '#',
    image: SteamSvg,
  },
];
