'use client'

import { PlayIcon } from "@primer/octicons-react";
import { VideoPlayer } from "@primer/react-brand";

export function VideoContent() {
  return (
    <div className='flex flex-col max-w-md gap-2'>
      <VideoPlayer 
        title="Seu vídeo especial" 
        playIcon={() => (
          <div className="flex items-center justify-center w-full h-full">
            <PlayIcon fill="white" size={96} />
          </div>
        )}
        showSeekControl={true}
        showCCButton={false}
        showMuteButton={false}
        showVolumeControl={false}
        showFullScreenButton={false}
        showBranding={false}
      >
        <VideoPlayer.Source src="/example.mp4" />
      </VideoPlayer>

      <p>
        Oi, eu vim aqui para lembrar que você é uma pessoa muito especial para mim! 🦆
      </p>
    </div>
  );
}