import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

const galleryData = [
  {
    category: 'Campus',
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', alt: 'College main building entrance with students' },
      { id: 2, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80', alt: 'College campus aerial view' },
      { id: 3, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', alt: 'College library reading room' },
      { id: 4, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'College classroom with students' },
    ],
  },
  {
    category: 'Events',
    images: [
      { id: 5, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Annual cultural fest performance on stage' },
      { id: 6, src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80', alt: 'Graduation ceremony with students in gowns' },
      { id: 7, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', alt: 'Guest lecture session in auditorium' },
      { id: 8, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', alt: 'Science exhibition with student projects' },
    ],
  },
  {
    category: 'Sports',
    images: [
      { id: 9, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80', alt: 'Students playing cricket on college ground' },
      { id: 10, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', alt: 'Basketball match in college sports complex' },
      { id: 11, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Annual sports meet opening ceremony' },
    ],
  },
  {
    category: 'Labs & Infrastructure',
    images: [
      { id: 12, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', alt: 'Computer science laboratory with modern systems' },
      { id: 13, src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80', alt: 'Chemistry laboratory with equipment' },
      { id: 14, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Physics laboratory instruments' },
    ],
  },
];

const allImages = galleryData.flatMap((g) => g.images.map((img) => ({ ...img, category: g.category })));

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', ...galleryData.map((g) => g.category)];

  const filtered =
    activeCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i > 0 ? i - 1 : filtered.length - 1));
  const nextImage = () => setLightboxIndex((i) => (i < filtered.length - 1 ? i + 1 : 0));

  // Keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16" onKeyDown={handleKeyDown}>
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Photo Gallery
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            A glimpse into campus life, events, sports, and infrastructure at Swami Vivekanand College.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="Photo gallery"
        >
          {filtered.map((img, index) => (
            <motion.button
              key={img.id}
              role="listitem"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-xl bg-slate-200 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label={`View image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Image className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </div>
              <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/50 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" aria-hidden="true" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl max-h-[80vh] w-full"
            >
              <img
                src={filtered[lightboxIndex].src.replace('w=600', 'w=1200')}
                alt={filtered[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-3 text-sm">{filtered[lightboxIndex].alt}</p>
              <p className="text-slate-400 text-center text-xs mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
