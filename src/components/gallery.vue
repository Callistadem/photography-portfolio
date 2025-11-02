<style scoped>
  #image-portfolio {
    text-align: center;
    padding: 2rem;
  }

  p {
    padding: 3rem;
    font-size: 1.5rem;
  }

  .loading {
    padding: 3rem;
    font-size: 1.2rem;
    color: #666;
  }

  .gallery {
    column-count:3;
    column-gap: 1rem;
    padding: 1rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .gallery-item {
    display: inline-block;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    break-inside: avoid;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
  }

  .photo-title {
    font-size: 1rem;
    font-weight: 600;
  }

  /* Lightbox styles */
  .lightbox {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.68);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }

  .lightbox-content {
    max-width: 90%;
    max-height: 80%;
    object-fit: contain;
    border-radius: 4px;
  }

  .lightbox-caption {
    color: white;
    padding: 1rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
  }

  .close:hover {
    color: #ccc;
  }

  /* Responsive columns */
  @media (max-width: 1200px) {
    .gallery {
      column-count: 3;
    }
  }

  @media (max-width: 768px) {
    .gallery {
      column-count: 2;
    }
  }

  @media (max-width: 480px) {
    .gallery {
      column-count: 1;
    }
  }
</style>

<template>
  <div id="image-portfolio">
    <p>Take a look at my {{ photoType }} photos.</p>
    
    <!-- Loading state -->
    <div v-if="loading" class="loading">Loading photos...</div>
    
    <!-- Gallery grid -->
    <div v-else class="gallery">
      <!-- Loop through each photo -->
      <div 
        v-for="photo in photos" 
        :key="photo.id" 
        class="gallery-item"
        @click="openLightbox(photo)"
      >
        <img 
          :src="photo.src" 
          :alt="photo.alt"
        />
      </div>
    </div>

    <!-- Lightbox for full-size viewing -->
    <div v-if="lightboxPhoto" class="lightbox" @click="closeLightbox">
      <span class="close">&times;</span>
      <img :src="lightboxPhoto.src" :alt="lightboxPhoto.alt" class="lightbox-content">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  photoType: {
    type: String,
    required: true
  }
});

const photos = ref([]);
const loading = ref(true);
const lightboxPhoto = ref(null);

const loadPhotos = () => {
  loading.value = true;
  
  try {
    // Try different path patterns - one of these should work
    
    // Option 1: Absolute path from src
    let photoModules = import.meta.glob('/src/assets/imgs/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { 
      eager: true 
    });
    
    // Option 2: If that doesn't work, try with @
    if (Object.keys(photoModules).length === 0) {
      photoModules = import.meta.glob('@/assets/imgs/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { 
        eager: true 
      });
    }
    
    // Option 3: If that doesn't work, try relative from component location
    if (Object.keys(photoModules).length === 0) {
      photoModules = import.meta.glob('../assets/imgs/**/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { 
        eager: true 
      });
    }
    
    console.log('Looking for folder:', props.photoType);
    console.log('Folder path:', props.photoType.toLowerCase().replace(/ /g, '-'));
    console.log('Available paths:', Object.keys(photoModules));
    
    const folderPath = props.photoType.toLowerCase().replace(/ /g, '-');
    
    const matchingPhotos = Object.entries(photoModules)
      .filter(([path]) => {
        console.log('Checking path:', path);
        return path.includes(`/${folderPath}/`);
      })
      .map(([path, module], index) => {
        const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
        const title = filename.replace(/-/g, ' ').replace(/_/g, ' ');
        
        return {
          id: index + 1,
          src: module.default,
          alt: title,
          title: title.charAt(0).toUpperCase() + title.slice(1)
        };
      });
    
    console.log('Matching photos found:', matchingPhotos.length);
    photos.value = matchingPhotos;
  } catch (error) {
    console.error('Error loading photos:', error);
    photos.value = [];
  } finally {
    loading.value = false;
  }
};

const openLightbox = (photo) => {
  lightboxPhoto.value = photo;
};

const closeLightbox = () => {
  lightboxPhoto.value = null;
};

onMounted(() => {
  loadPhotos();
});
</script>