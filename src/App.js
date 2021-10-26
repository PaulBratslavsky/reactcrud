import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useGetVideos from './hooks/useGetVideos';
import { MdAddCircle } from 'react-icons/md';

import VideoPlayer from './components/VideoPlayer';
import VideoCard from './components/VideoCard';
import DescriptionCard from './components/DescriptionCard';

import { selectedVideo } from './utils';
import AddVideo from './components/AddVideo';

const url = 'http://localhost:3000/videos';
// const url = 'http://localhost:3000/coding';

const ShowButtonStyled = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
    color: rgba(235, 071, 195, 0.9);
  }
  }
`

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function App() {
  const { videos, loading, error } = useGetVideos(url);
  const [video, setVideo] = useState(null);
  const [show, setShow] = useState(false);

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
          { show ? <AddVideo setShow={setShow} /> : <ShowButtonStyled onClick={() => setShow(true)}><MdAddCircle /></ShowButtonStyled> }
      </div>
    </MainLayout>
  );
}

export default App;
