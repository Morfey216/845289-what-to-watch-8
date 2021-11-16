import { useRef } from 'react';
import { Thumbnail } from '../../const';

type VideoPlayerProps = {
  src: string;
}

function VideoPlayer({src}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <video
      ref={videoRef}
      src={src}
      width={Thumbnail.Width}
      height={Thumbnail.Height}
      autoPlay
      muted
      style={{objectFit: 'cover'}}
    />
  );
}

export default VideoPlayer;
