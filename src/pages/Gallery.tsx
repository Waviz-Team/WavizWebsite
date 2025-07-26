import { useState } from 'react';
import { galleryItems } from './GalleryItems';
import './Gallery.css';

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="gallery-container">
      <h2>Waviz Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="modal-image"
            />
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
