import CoffeCup from '@/shared/ui/CoffeCup/CoffeCup';
import cls from './CoffeSection.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ICoffeSectionProps {
  className?: string;
}

export const CoffeSection = ({ className }: ICoffeSectionProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <CoffeCup />
      </div>
    </section>
  )
}
