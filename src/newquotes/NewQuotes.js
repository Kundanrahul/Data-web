import { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import './NewQuotes.css';
import MotionWrap from '../MotionWrap/MotionWrap';
import Navbar from '../components/NavBar/Navbar';
import LazyLoad from 'react-lazyload';

const NewQuotes = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const storage = getStorage();
    const listRef = ref(storage, "/");

    listAll(listRef)
      .then((res) => {
        const urls = res.items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => url)
        );
        Promise.all(urls).then((urls) => setImageUrls(urls));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MotionWrap>
      <Navbar profileUrl="/profile" newQuotesUrl="/newquotes" />
      <div className='all'>
        <div className='ifile'> YOUR FILES</div>
        <div className="image-grid">
          {imageUrls.map((url, index) => (
            <div className="image-box" key={index}>
              <LazyLoad height={200} once>
                <img className="image" src={url} alt={`quote ${index}`} />
              </LazyLoad>
              <div className="image-name">{`File ${index + 1}`}</div>
            </div>
          ))}
        </div>
      </div>
    </MotionWrap>
  );
};

export default NewQuotes;






