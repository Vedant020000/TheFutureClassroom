import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoJSOptions {
  autoplay?: boolean | string;
  controls?: boolean;
  responsive?: boolean;
  fluid?: boolean;
  sources?: Array<{
    src: string;
    type: string;
  }>;
  [key: string]: any;
}

interface VideoJSProps {
  options: VideoJSOptions;
  onReady?: (player: any) => void;
}

export const VideoJS: React.FC<VideoJSProps> = (props) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<any>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current?.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="w-full h-full">
      <div ref={videoRef} className="w-full h-full">
        {/* Ensure video.js element is responsive and doesn't overflow */}
      </div>
      <style>{`
        .video-js { width: 100% !important; height: 100% !important; max-width: 100%; }
        .vjs-tech { object-fit: cover; }
      `}</style>
    </div>
  );
};

export default VideoJS;
