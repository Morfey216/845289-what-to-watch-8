import { useEffect, useRef } from 'react';
import { DELAY_PLAYBACK, Thumbnail } from '../../const';

type VideoPlayerProps = {
  src: string;
  poster: string;
}

function VideoPlayer({src, poster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (videoRef.current === null) {
      return;
    }

    if (videoRef.current !== null) {
      timeout = setTimeout(() => videoRef.current?.play(), DELAY_PLAYBACK);
    }

    videoRef.current.load();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      width={Thumbnail.Width}
      height={Thumbnail.Height}
      poster={poster}
      muted
      style={{objectFit: 'cover'}}
    />
  );
}

export default VideoPlayer;
