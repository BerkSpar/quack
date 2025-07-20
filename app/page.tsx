import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';
import { VideoContent } from '@/components/video-content';

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center w-screen h-screen p-4 bg-zinc-100">
      <AppHeader />
      <VideoContent />
      <AppFooter />
    </main>
  );
}
