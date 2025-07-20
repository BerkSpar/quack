'use client'

import { PlayIcon } from "@primer/octicons-react";
import { VideoPlayer } from "@primer/react-brand";

export type MessageData = {
  videoTitle: string;
  videoUrl: string;
  message: string;
}

export function VideoContent({ videoTitle, videoUrl, message }: MessageData) {
  return (
    <div className='flex flex-col max-w-md gap-2'>
      <VideoPlayer 
        title={videoTitle} 
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
        <VideoPlayer.Source src={videoUrl} />
      </VideoPlayer>

      <p>{message}</p>
    </div>
  );
}