import cls from './MainSection.module.css'
import { classNames } from '@/shared/lib/classNames/classNames'
import { TimerDisplay } from './TimerDisplay';
import { CoffeSection } from './CoffeSection';

interface IMainSectionProps {
  className?: string;
}

export const MainSection = ({ className }: IMainSectionProps) => {
  return (
    <main className={classNames(cls.content, {}, [className ?? ''])}>
      <TimerDisplay session='1' time='29:59' />
      <CoffeSection />
    </main>
  )
}