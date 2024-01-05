// ImageSection.jsx

import React from 'react';

function ImageSection() {
  return (
    <section>
      {/* big image agriculure */}
     <img
      fetchpriority="high"
        decoding="async"
        width="2560"
        height="1707"
        alt=""
        style={{ objectPosition: '50% 36%' }}
        data-object-fit="cover"
        data-object-position="50% 36%"
        data-srcset="/agripic.jpg 2560w, /agripic-300x200.jpg 300w, /agripic-1024x683.jpg 1024w, /agripic-768x512.jpg 768w, /agripic-1536x1024.jpg 1536w, /agripic-2048x1365.jpg 2048w, /agripic-18x12.jpg 18w"
        data-src="/agripic.jpg"
        data-sizes="(max-width: 2560px) 100vw, 2560px"
        className="wp-block-cover__image-background wp-image-2734 lazyloaded"
        src="/agripic.jpg"
        sizes="(max-width: 2560px) 100vw, 2560px"
        srcset="/agripic.jpg 2560w, /agripic-300x200.jpg 300w, /agripic-1024x683.jpg 1024w, /agripic-768x512.jpg 768w, /agripic-1536x1024.jpg 1536w, /agripic-2048x1365.jpg 2048w, /agripic-18x12.jpg 18w"
      />

    </section>
  );
}


export default ImageSection;
