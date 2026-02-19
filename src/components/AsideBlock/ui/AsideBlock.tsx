import cls from './AsideBlock.module.css';
import { classNames } from "@/shared/lib/classNames/classNames";
import Image from 'next/image';
import { linkData } from '../model/linkData';

interface IAsideBlockProps {
  className?: string;
}
export const AsideBlock = ({ className }: IAsideBlockProps) => {
  return (
    <div className={classNames(cls.aside, {}, [className ?? ''])}>
      <div className={classNames(cls.line, {}, [])}></div>
      <nav className={classNames(cls.nav, {}, [])}>
        {linkData.map((c, i) => {
          return (
            <a
              className={classNames(cls.link, {}, [])}
              href={c.href}
              key={i}
            >
              <Image
                alt='#'
                src={c.image}
                width={32}
                height={32}
                className={classNames(cls.svg, {}, [])}
              />
            </a>
          )
        })}
      </nav>
    </div>
  )
}
