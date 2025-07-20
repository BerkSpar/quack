import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';
import { VideoContent } from '@/components/video-content';
import data from './data.json';

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const currentMessage = data[slug as keyof typeof data]

  if (!currentMessage) {
    return <h1>Não há nada aqui</h1>
  }

  const messageInfo = currentMessage

  return (
    <main className="flex flex-col justify-between items-center w-screen h-screen p-4 bg-zinc-100">
      <AppHeader />
      
      <VideoContent 
        videoUrl={messageInfo.videoUrl}
        videoTitle={messageInfo.videoTitle}
        message={messageInfo.message}
      />
      
      <AppFooter />
    </main>
  );
}
