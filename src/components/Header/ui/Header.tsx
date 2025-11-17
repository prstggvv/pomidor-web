import cls from './Header.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className ?? ''])}>
      <h1 className={classNames(cls.title, {}, [])}>Header</h1>
    </header>
  )
}