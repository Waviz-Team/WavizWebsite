import { useState } from 'react';
import { galleryItems } from './GalleryItems';
import './Gallery.css';

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  // This function runs when a gallery item is clicked
  // It opens the modal with the clicked item's details
  const openModal = (item) => {
    setSelectedItem(item);
  };
 // This function closes the modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="gallery-container">
      <h2>Waviz Gallery</h2>
      {/* Show all gallery items in a grid layout */}
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
 {/* If an item is selected, show a modal */}
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
