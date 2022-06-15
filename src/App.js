import React, { useState } from 'react';
import { Header } from './components/header/Header';
import { Container } from './layout/Container';
import { Gallery } from './components/gallery/Gallery';

function App() {
  const [photos, setPhotos] = useState([])
  console.log(photos)
  return (
    <div className="App">
      <Header setPhotos={setPhotos} />
      <Container>

        <Gallery photos={photos} />
      </Container>
    </div>
  );
}

export default App;
