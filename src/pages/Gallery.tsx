import { useState } from 'react';
import { galleryItems } from './GalleryItems';
import './Gallery.css';

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Open modal with selected item
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // Close modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className='gallery-container'>
      <h2>Waviz Gallery</h2>

      {/* Grid layout for gallery items */}
      <div className='gallery-grid'>
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className='gallery-item'
            onClick={() => openModal(item)}>
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            {/* 이미지 + How to use */}
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

            {/* Parameters + Code */}

            <div className='modal-params-options'>
              <div className='section'>
                <h3>Parameters</h3>

                <span className='param-label'>param 1</span>: Lorem ipsum...
                <br />
                <span className='param-label'>param 2</span>: Lorem ipsum...
              </div>

              <div className='section'>
                <h3>Code</h3>
                <code className='code-snippet'>yourFunctionCall();</code>
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
