interface Props {
  videoId: string;
  title: string;
}

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
  return match ? match[1] : url;
}

export default function YouTubeEmbed({ videoId, title }: Props) {
  const id = getYouTubeId(videoId);
  return (
    <div className="yt-embed">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
