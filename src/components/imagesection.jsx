// ImageSection.jsx

import React from 'react';

function ImageSection() {
  return (
    <section>
      {/* big image agriculure */}
      <img
  fetchpriority="high"
  decoding="async"
  width="100%"
  height="1000" //largeur image (height image)
  alt=""
  style={{ objectPosition: '50% 36%' }}
  data-object-fit="cover"
  data-object-position="50% 36%"
  //data-srcset="https://example.com/simple-image.jpg 2560w"
  data-src="/agripic.jpg"
  data-sizes="(max-width: 2000px) 100vw, 2560px"
  class="wp-block-cover__image-background wp-image-2734 lazyloaded"
  src="/agripic.jpg"
  sizes="(max-width: 2560px) 100vw, 2560px"
  srcSet="/agripic.jpg.jpg 2560w"
/>

    </section>
  );
}


export default ImageSection;
