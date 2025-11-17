import cls from './TimerDIsplay.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ITimerDisplayProps {
  className?: string;
  session: string;
  time: string;
}

export const TimerDisplay = ({ className, session, time }: ITimerDisplayProps) => {
  return (
    <section className={classNames(cls.section, {}, [className ?? ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.sessionBlock, {}, [])}>
          <p className={classNames(cls.text, {}, [])}>
            {`Выполненных сессий: ${session}/8`}
          </p>
        </div>
        <div className={classNames(cls.timerBlock, {}, [])}>
          <h1 className={classNames(cls.timer, {}, [])}>
            {time}
          </h1>
        </div>
      </div>
    </section>
  )
} 