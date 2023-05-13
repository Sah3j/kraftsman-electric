import React, { useState } from 'react';
import './Portfolio.css'
import Modal from './Modal'; // Assuming you have a Modal component for image enlargement

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy image data
  const portfolioData = [
    { id: 1, title: 'Project 1', imageSrc: 'https://i.imgur.com/EfNR9D9.png' },
    { id: 2, title: 'Project 2', imageSrc: 'https://i.imgur.com/90Sv9oD.png' },
    { id: 3, title: 'Project 3', imageSrc: 'https://i.imgur.com/H6hjh5Q.png' },
    { id: 4, title: 'Project 4', imageSrc: 'https://i.imgur.com/ZdhPEyQ.png' },
    { id: 5, title: 'Project 5', imageSrc: 'https://i.imgur.com/iGkXExr.png' },
    { id: 6, title: 'Project 6', imageSrc: 'https://i.imgur.com/ZdhPEyQ.png' },
  ];

  // Function to handle image click and open the modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
		<div className='portfolio-section'>
			<h2 className='portfolio-heading'>OUR CREATIVE SHOWCASE</h2>
				<div className="portfolio-container">
					{portfolioData.map((item) => (
					<div className='portfolio-image-box hidden'>
							<img
									key={item.id}
									className="portfolio-image"
									src={item.imageSrc}
									alt={item.title}
									onClick={() => handleImageClick(item)}
							/>
					</div>
				))}
				{selectedImage && (
					<Modal image={selectedImage} closeModal={closeModal} />
				)}
			</div>
		</div>
  );
};

export default Portfolio;
