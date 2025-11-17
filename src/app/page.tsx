import './styles/index.css';
import { classNames } from "@/shared/lib/classNames/classNames";
import { Header } from "@/components/Header";
import { AsideBlock } from '@/components/AsideBlock';
import { MainSection } from '@/components/MainSection';

export default function Home() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <AsideBlock className={classNames('aside', {}, [])} />
        <MainSection />
      </div>
    </div>
  );
}
