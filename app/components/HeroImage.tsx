'use client'

import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '18kr94ce', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset
  useCdn: true
});

const builder = imageUrlBuilder(client);

interface ImageSource {
    _id: string;
    // include other properties if known
  }


function urlFor(source: ImageSource) {
    return builder.image(source);
  }

const HeroImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    client.fetch('*[_type == "Hero Image"][0]')
      .then(heroImage => {
        if (heroImage && heroImage.image) {
          setImageUrl(urlFor(heroImage.image).width(800).url());
        } else {
          console.error('Hero image not found');
        }
      })
      .catch(err => console.error('Error fetching hero image:', err));
  }, []);
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
    <h1 className="text-white text-4xl md:text-6xl font-semibold text-center">
        Willkommen auf meiner Website
      </h1>
    </div>
  );
};

export default HeroImage;