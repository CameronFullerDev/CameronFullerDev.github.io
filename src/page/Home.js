import React from 'react';
import DarkBanner from '../component/banner/dark/DarkBanner';
function Home() {

  const text = ["Hello, I'm Cameron.", "I'm a software engineer.", "Nice to meet you."]
  return (
    <div>
      <DarkBanner className="page" Text={text} />
    </div>
  );
}

export default Home;
