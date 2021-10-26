import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useGetVideos from './hooks/useGetVideos';

import VideoPlayer from './components/VideoPlayer';
import VideoCard from './components/VideoCard';
import DescriptionCard from './components/DescriptionCard';

import { selectedVideo } from './utils';
import AddVideo from './components/AddVideo';

const url = 'http://localhost:3000/videos';

const MainLayout = styled.div`
  display: grid;
  height: 98vh;
  grid-template-columns: 70% 1fr;
  grid-template-rows: 70% 1fr;
  grid-gap: 10px;

  .select,
  .side {
    border-radius: 5px;
    overflow: hidden;
  }

  .video {
    grid-area: 1 / 1 / 2 / 2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  .select {
    grid-area: 2 / 1 / 3 / 2;
    position: relative;
    padding: 10px;
    display: flex;
    overflow-x: auto;
  }

  .side {
    grid-area: 1 / 2 / 3 / 3;
    background-color: rgba(235, 071, 195, 0.1);
    backdrop-filter: blur(5px);
    color: white;
  }
`;

function App() {
  const { videos, loading, error } = useGetVideos(url);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos[0].videoID);
    }
  }, [setVideo, videos]);

 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const selected = selectedVideo(videos, video);
  return (
    <MainLayout>
      <div className="video">
        <VideoPlayer videoId={video} />
      </div>
      <div className="select">
        {videos.map((item) => (
          <VideoCard
            item={item}
            key={item.videoID}
            video={video}
            setVideo={setVideo}
          />
        ))}
      </div>
      <div className="side">
          { selected && <DescriptionCard item={selected} /> }
          {/* <AddVideo /> */}
      </div>
    </MainLayout>
  );
}

export default App;
