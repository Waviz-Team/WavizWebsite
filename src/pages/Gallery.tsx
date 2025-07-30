import { useState } from 'react';
import { galleryItems, GalleryItem } from './galleryItems';
import './Gallery.css';

function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className='gallery-container'>
      <img src='/assets/logos/pnp.svg' height='100rem'/>
      <h2>React Component Gallery</h2>

      <div className='gallery-grid'>
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className='gallery-item'
            onClick={() => openModal(item)}>
            <img src={item.imageUrl} alt={item.title} className='gallery-item-image'/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-top'>
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className='modal-image'
              />
              <div className='modal-howto'>
                <h1>{selectedItem.title}</h1>
                <p>{selectedItem.description}</p>
              </div>
            </div>

            <div className='modal-params-options'>
              <div className='section'>
                <h3>Parameters</h3>
                {/* Check if 'selectedItem.params' exists and has any items */}
                {selectedItem.params?.length ? (
                  selectedItem.params.map((param, index) => (
                    <div key={index}>
                      {/* Check if 'selectedItem.params' exists and has any items */}
                      <span className='param-label'>{param.name}</span>:{' '}
                      {param.value}
                    </div>
                  ))
                ) : (
                  <p>No parameters available.</p>
                )}
              </div>

              <div className='section'>
                <h3>Code</h3>
                <code className='code-snippet'>
                  {selectedItem.code || 'No code available.'}
                </code>
              </div>
            </div>

            <button className='close-button' onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
