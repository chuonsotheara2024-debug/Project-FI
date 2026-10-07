/**
 * ==============================================================================
 * AURA & CO. - Contemporary Apparel & Lifestyle
 * Main Application Logic & E-Commerce Engine
 * Vanilla JavaScript (No Frameworks, No Dependencies)
 * ==============================================================================
 */

(function () {
  'use strict';

  /* ============================================================================
     1. PRODUCT DATA REPOSITORY (34+ Curated Products)
     ============================================================================ */
  const PRODUCTS = [
    // ----------------- MEN'S COLLECTION (7 products) -----------------
    {
      id: 'men-1',
      name: 'Classic Oxford Button-Down Shirt',
      category: 'men',
      subCategory: 'shirts',
      price: 58.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 142,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'White', hex: '#ffffff' },
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Beige', hex: '#d6c7b2' }
      ],
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1603252109303-2751441ec157?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: false,
      isNew: false,
      isFeatured: true,
      description: 'Crafted from 100% two-ply long-staple organic cotton. Features a traditional button-down collar, box pleat, and subtle mother-of-pearl buttons for enduring daily refinement.'
    },
    {
      id: 'men-2',
      name: 'Heavyweight Organic Cotton Crewneck Tee',
      category: 'men',
      subCategory: 'T-shirts',
      price: 32.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 230,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'White', hex: '#ffffff' },
        { name: 'Olive', hex: '#556b2f' }
      ],
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: false,
      isNew: true,
      isFeatured: true,
      description: 'An architectural 280 GSM heavyweight jersey tee. Pre-shrunk with a tailored rib collar that holds shape wear after wear.'
    },
    {
      id: 'men-3',
      name: 'Slim-Fit Japanese Selvedge Denim',
      category: 'men',
      subCategory: 'jeans',
      price: 89.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 88,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Woven on vintage shuttle looms in Okayama. 13.5 oz raw indigo selvedge denim designed to develop distinct personal whiskers and fades.'
    },
    {
      id: 'men-4',
      name: 'Vintage Suede Zip Bomber Jacket',
      category: 'men',
      subCategory: 'jackets',
      price: 115.00,
      originalPrice: 155.00,
      rating: 4.9,
      reviewsCount: 64,
      sizes: ['M', 'L', 'XL'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: true,
      isNew: false,
      isFeatured: true,
      description: 'Supple goat suede jacket with ribbed hem, dual storm pockets, and smooth cupro lining. A transitional outerwear cornerstone.'
    },
    {
      id: 'men-5',
      name: 'Tailored Italian Wool Suit Blazer',
      category: 'men',
      subCategory: 'suits',
      price: 240.00,
      originalPrice: 295.00,
      rating: 5.0,
      reviewsCount: 41,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: true,
      isNew: true,
      isFeatured: true,
      description: 'Milled in Biella, Italy from Super 120s virgin wool. Half-canvas construction with soft roped shoulders for natural drape and freedom of movement.'
    },
    {
      id: 'men-6',
      name: 'Relaxed Textured Linen Camp Shirt',
      category: 'men',
      subCategory: 'shirts',
      price: 48.00,
      originalPrice: null,
      rating: 4.6,
      reviewsCount: 95,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Olive', hex: '#556b2f' },
        { name: 'White', hex: '#ffffff' }
      ],
      image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: false,
      description: 'Breathable 100% French flax linen woven with subtle slub texture. Styled with a relaxed camp collar and side vents.'
    },
    {
      id: 'men-7',
      name: 'Heritage Corduroy Overshirt Jacket',
      category: 'men',
      subCategory: 'jackets',
      price: 68.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 53,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Navy', hex: '#1e3a8a' }
      ],
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: '8-wale plush organic cotton corduroy overshirt. Ideal for layering over fine knitwear during brisk transitional weather.'
    },

    // ----------------- WOMEN'S COLLECTION (7 products) -----------------
    {
      id: 'women-1',
      name: 'Mulberry Silk Satin Slip Midi Dress',
      category: 'women',
      subCategory: 'dresses',
      price: 98.00,
      originalPrice: 135.00,
      rating: 4.9,
      reviewsCount: 178,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Wine', hex: '#881337' },
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Beige', hex: '#d6c7b2' }
      ],
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: true,
      isNew: false,
      isFeatured: true,
      description: 'Bias-cut 19-momme grade-6A mulberry silk that gently glides over contours. Features delicate adjustable French straps and a cowl neck.'
    },
    {
      id: 'women-2',
      name: 'Fine Ribbed Knit Mockneck Top',
      category: 'women',
      subCategory: 'tops',
      price: 42.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 112,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'White', hex: '#ffffff' },
        { name: 'Beige', hex: '#d6c7b2' }
      ],
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: false,
      description: 'Superfine Merino wool and modal blend with micro-rib stretch. A minimalist layering staple for boardroom or weekend casual.'
    },
    {
      id: 'women-3',
      name: 'High-Rise Pleated Wool Midi Skirt',
      category: 'women',
      subCategory: 'skirts',
      price: 54.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 89,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Brown', hex: '#78350f' }
      ],
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Sharply knife-pleated skirt with structured waistband and fluid motion. Features a concealed side zipper and lining.'
    },
    {
      id: 'women-4',
      name: 'Classic Wide-Leg Raw Denim Jeans',
      category: 'women',
      subCategory: 'jeans',
      price: 79.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 145,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: true,
      description: 'Ultra-high-rise silhouette cut from rigid 100% organic cotton denim that molds seamlessly to your frame over time.'
    },
    {
      id: 'women-5',
      name: 'Double-Breasted Cashmere Trench Coat',
      category: 'women',
      subCategory: 'coats',
      price: 210.00,
      originalPrice: 260.00,
      rating: 5.0,
      reviewsCount: 62,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: true,
      isNew: false,
      isFeatured: true,
      description: 'Luxe blend of 30% recycled Mongolian cashmere and 70% virgin wool. Styled with epaulettes, tortoise storm flaps, and a tie belt.'
    },
    {
      id: 'women-6',
      name: 'Bohemian Tiered Floral Maxi Dress',
      category: 'women',
      subCategory: 'dresses',
      price: 85.00,
      originalPrice: 110.00,
      rating: 4.9,
      reviewsCount: 97,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Wine', hex: '#881337' },
        { name: 'Pastel', hex: '#fbcfe8' }
      ],
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: true,
      isFeatured: false,
      description: 'Billowy tiered silhouette made from breathable botanical viscose. Finished with smocked wrist cuffs and a flattering self-tie neckline.'
    },
    {
      id: 'women-7',
      name: 'Structured Single-Breasted Wool Blazer',
      category: 'women',
      subCategory: 'coats',
      price: 135.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 76,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Olive', hex: '#556b2f' }
      ],
      image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'An oversized tailored blazer crafted with notched lapels, horn buttons, and functional interior welt pockets.'
    },

    // ----------------- KIDS' COLLECTION (6 products) -----------------
    {
      id: 'kids-1',
      name: 'Organic Cotton Graphic Dino Tee',
      category: 'kids',
      subCategory: 'T-shirts',
      price: 22.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 165,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Olive', hex: '#556b2f' },
        { name: 'White', hex: '#ffffff' }
      ],
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: false,
      description: 'OEKO-TEX certified gentle organic cotton jersey with non-toxic, water-based hand-screened illustrations for playful everyday wear.'
    },
    {
      id: 'kids-2',
      name: 'Pastel Floral Ruffle Party Dress',
      category: 'kids',
      subCategory: 'dresses',
      price: 38.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 79,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Pastel', hex: '#fbcfe8' },
        { name: 'White', hex: '#ffffff' }
      ],
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: true,
      description: 'Soft cotton lawn dress with flutter sleeves, gentle gathers, and a comfortable breathable inner voile lining.'
    },
    {
      id: 'kids-3',
      name: 'Durable Flex Cargo Play Pants',
      category: 'kids',
      subCategory: 'pants',
      price: 34.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 92,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Olive', hex: '#556b2f' }
      ],
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Reinforced knee patches, elasticated drawstring waistband, and double-stitched cargo pockets built to endure park adventures.'
    },
    {
      id: 'kids-4',
      name: 'Colorblock Hooded Windbreaker Jacket',
      category: 'kids',
      subCategory: 'jackets',
      price: 36.00,
      originalPrice: 48.00,
      rating: 4.8,
      reviewsCount: 110,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Olive', hex: '#556b2f' }
      ],
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: false,
      isFeatured: true,
      description: 'Water-repellent recycled nylon windbreaker with high-visibility reflective zipper pull and packable hood.'
    },
    {
      id: 'kids-5',
      name: 'Cozy Sherpa Fleece Kangaroo Hoodie',
      category: 'kids',
      subCategory: 'jackets',
      price: 29.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 88,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Brown', hex: '#78350f' }
      ],
      image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: false,
      description: 'Plush thermal fleece hoodie that traps warm air efficiently without adding bulky weight. Front pouch pocket for treasures.'
    },
    {
      id: 'kids-6',
      name: 'Classic Indigo Denim Overalls',
      category: 'kids',
      subCategory: 'pants',
      price: 42.00,
      originalPrice: 52.00,
      rating: 4.8,
      reviewsCount: 65,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Navy', hex: '#1e3a8a' }
      ],
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: false,
      isFeatured: false,
      description: 'Sturdy ring-spun denim dungarees featuring brass clasps, adjustable shoulder straps, and roomy side pockets.'
    },

    // ----------------- ACCESSORIES COLLECTION (7 products) -----------------
    {
      id: 'acc-1',
      name: 'Minimalist Leather Crossbody Bag',
      category: 'accessories',
      subCategory: 'bags',
      price: 115.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 198,
      sizes: ['One Size'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: false,
      isNew: true,
      isFeatured: true,
      description: 'Italian vegetable-tanned full-grain leather with magnetic flap closure, brushed solid brass hardware, and microsuede interior.'
    },
    {
      id: 'acc-2',
      name: 'Australian Wool Felt Wide-Brim Fedora',
      category: 'accessories',
      subCategory: 'hats',
      price: 49.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 84,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Structured 100% Australian merino wool felt hat trimmed with a tonal leather band. UPF 50+ sun protection built-in.'
    },
    {
      id: 'acc-3',
      name: '100% Mongolian Cashmere Fringe Scarf',
      category: 'accessories',
      subCategory: 'scarves',
      price: 49.00,
      originalPrice: 65.00,
      rating: 5.0,
      reviewsCount: 154,
      sizes: ['One Size'],
      colors: [
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Navy', hex: '#1e3a8a' },
        { name: 'Wine', hex: '#881337' }
      ],
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: false,
      isFeatured: true,
      description: 'Spun from pure grade-A cashmere fibers gathered in inner Mongolia. Unrivaled whisper-soft insulation with delicate eyelash fringe edges.'
    },
    {
      id: 'acc-4',
      name: 'Handcrafted Full-Grain Leather Belt',
      category: 'accessories',
      subCategory: 'belts',
      price: 39.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 122,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Solid 3.5mm thick bridle leather, beveled and burnished by hand. Accented with an antique nickel-free buckle.'
    },
    {
      id: 'acc-5',
      name: 'Canvas Weekender Travel Duffle Bag',
      category: 'accessories',
      subCategory: 'bags',
      price: 88.00,
      originalPrice: 110.00,
      rating: 4.9,
      reviewsCount: 73,
      sizes: ['One Size'],
      colors: [
        { name: 'Olive', hex: '#556b2f' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: true,
      isFeatured: false,
      description: 'Heavy 18 oz water-repellent duck canvas with full-grain leather handles, padded shoulder strap, and waterproof shoe compartment.'
    },
    {
      id: 'acc-6',
      name: 'Polarized Acetate Classic Sunglasses',
      category: 'accessories',
      subCategory: 'accessories',
      price: 55.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 88,
      sizes: ['One Size'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Brown', hex: '#78350f' }
      ],
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Handcrafted cellulose acetate frame with 5-barrel hinges and scratch-resistant CR-39 category 3 polarized lenses.'
    },
    {
      id: 'acc-7',
      name: 'Ribbed Merino Wool Beanie',
      category: 'accessories',
      subCategory: 'hats',
      price: 28.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 94,
      sizes: ['One Size'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Olive', hex: '#556b2f' },
        { name: 'Beige', hex: '#d6c7b2' }
      ],
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: false,
      description: 'Seamless circular-knit 100% extra-fine Merino wool beanie with foldable cuff. Naturally temperature-regulating and itch-free.'
    },

    // ----------------- SHOES COLLECTION (7 products) -----------------
    {
      id: 'shoes-1',
      name: 'Minimalist Low-Top Nappa Sneakers',
      category: 'shoes',
      subCategory: 'sneakers',
      price: 110.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 215,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'White', hex: '#ffffff' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80',
      additionalImages: [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80'
      ],
      isSale: false,
      isNew: true,
      isFeatured: true,
      description: 'Full-grain Italian Nappa leather upper, calfskin lining, and margom stitched natural rubber cupsole for unparalleled stride comfort.'
    },
    {
      id: 'shoes-2',
      name: 'Classic Hand-Stitched Chelsea Boots',
      category: 'shoes',
      subCategory: 'boots',
      price: 119.00,
      originalPrice: 149.00,
      rating: 4.9,
      reviewsCount: 167,
      sizes: ['M', 'L', 'XL'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Black', hex: '#1a1a1a' }
      ],
      image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: false,
      isFeatured: true,
      description: 'Goodyear-welted Chelsea boots with dual stretch side gussets, pull tabs, and oil-treated water-resistant leather uppers.'
    },
    {
      id: 'shoes-3',
      name: 'Woven Leather Strappy Summer Sandals',
      category: 'shoes',
      subCategory: 'sandals',
      price: 68.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 83,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Brown', hex: '#78350f' },
        { name: 'Beige', hex: '#d6c7b2' }
      ],
      image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Artisanal hand-braided leather sandals with cushioned cork footbed and flexible anti-slip rubber outsole.'
    },
    {
      id: 'shoes-4',
      name: 'Retro Chunky Runner Athletic Sneakers',
      category: 'shoes',
      subCategory: 'sneakers',
      price: 76.00,
      originalPrice: 95.00,
      rating: 4.8,
      reviewsCount: 104,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'White', hex: '#ffffff' },
        { name: 'Navy', hex: '#1e3a8a' }
      ],
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: true,
      isNew: true,
      isFeatured: false,
      description: '90s-inspired sculpted EVA midsole with breathable mesh panels and reflective detailing for everyday urban mobility.'
    },
    {
      id: 'shoes-5',
      name: 'Waterproof Lug-Sole Suede Combat Boots',
      category: 'shoes',
      subCategory: 'boots',
      price: 135.00,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 71,
      sizes: ['M', 'L', 'XL'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Olive', hex: '#556b2f' }
      ],
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Heavy-tread Vibram commando sole, hydro-treated oiled suede, and padded collar designed for rain, snow, and rough terrain.'
    },
    {
      id: 'shoes-6',
      name: 'Slip-On Suede Casual Loafers',
      category: 'shoes',
      subCategory: 'shoes',
      price: 84.00,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 56,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Brown', hex: '#78350f' }
      ],
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: false,
      isFeatured: false,
      description: 'Unlined Italian suede loafers offering immediate out-of-the-box flexibility and an ultra-plush memory foam footbed.'
    },
    {
      id: 'shoes-7',
      name: 'Cushioned Cloud Slide Sandals',
      category: 'shoes',
      subCategory: 'sandals',
      price: 36.00,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 148,
      sizes: ['S', 'M', 'L'],
      colors: [
        { name: 'Black', hex: '#1a1a1a' },
        { name: 'Beige', hex: '#d6c7b2' },
        { name: 'Olive', hex: '#556b2f' }
      ],
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80',
      additionalImages: [],
      isSale: false,
      isNew: true,
      isFeatured: false,
      description: 'One-piece molded high-density EVA slide featuring deep heel cup and curved arch support for recovery and poolside lounging.'
    }
  ];

  /* ============================================================================
     2. GLOBAL STATE STORE
     ============================================================================ */
  const state = {
    products: PRODUCTS,
    cart: [],
    wishlist: [],
    appliedCoupon: null, // { code: 'STYLE20', discountPercent: 0.20 } or null
    filters: {
      category: 'all',
      search: '',
      maxPrice: 300,
      selectedSizes: [],
      selectedColors: [],
      onSaleOnly: false,
      isNewOnly: false
    },
    sortBy: 'featured',
    currentHeroSlide: 0,
    heroTimer: null,
    theme: 'light'
  };

  const FREE_SHIPPING_THRESHOLD = 75.00;
  const STANDARD_SHIPPING_FEE = 12.00;

  /* ============================================================================
     3. DOM ELEMENT REFERENCES
     ============================================================================ */
  const dom = {
    // Theme & Navigation
    html: document.documentElement,
    themeToggleBtn: document.getElementById('theme-toggle'),
    themeModeText: document.querySelector('.theme-mode-text'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mobileMenuClose: document.getElementById('mobile-menu-close'),
    primaryNav: document.getElementById('primary-navigation'),
    backdropOverlay: document.getElementById('backdrop-overlay'),
    navLinks: document.querySelectorAll('.nav-link'),

    // Hero Slider
    heroSlider: document.getElementById('hero-slider'),
    heroSlides: document.querySelectorAll('.hero-slide'),
    sliderPrevBtn: document.getElementById('slider-prev-btn'),
    sliderNextBtn: document.getElementById('slider-next-btn'),
    sliderIndicators: document.getElementById('slider-indicators'),

    // Search & Badges
    globalSearchInput: document.getElementById('global-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    searchResultsDropdown: document.getElementById('search-results-dropdown'),
    wishlistBadge: document.getElementById('wishlist-badge'),
    cartBadge: document.getElementById('cart-badge'),
    wishlistToggleBtn: document.getElementById('wishlist-toggle-btn'),
    cartToggleBtn: document.getElementById('cart-toggle-btn'),

    // Shop Catalog & Filters
    shopCatalogTitle: document.getElementById('shop-catalog-title'),
    productCountLabel: document.getElementById('product-count-label'),
    sortSelect: document.getElementById('sort-select'),
    activeFilterChips: document.getElementById('active-filter-chips'),
    shopSidebar: document.getElementById('shop-sidebar'),
    sidebarCloseBtn: document.getElementById('sidebar-close-btn'),
    mobileFilterBtn: document.getElementById('mobile-filter-btn'),
    activeFilterPillCount: document.getElementById('active-filter-pill-count'),
    applyFiltersBtn: document.getElementById('apply-filters-btn'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    categoryFilterBtns: document.querySelectorAll('.category-filter-btn'),
    filterSaleCheckbox: document.getElementById('filter-sale'),
    filterNewCheckbox: document.getElementById('filter-new'),
    priceSlider: document.getElementById('price-slider'),
    priceValueIndicator: document.getElementById('price-value-indicator'),
    sizeFiltersContainer: document.getElementById('size-filters'),
    colorFiltersContainer: document.getElementById('color-filters'),
    productsGrid: document.getElementById('products-grid'),
    emptyState: document.getElementById('empty-state'),
    emptyResetBtn: document.getElementById('empty-reset-btn'),

    // Category Cards in Showcase
    categoryCards: document.querySelectorAll('.category-card'),

    // Drawers (Cart & Wishlist)
    cartDrawer: document.getElementById('cart-drawer'),
    cartDrawerClose: document.getElementById('cart-drawer-close'),
    cartDrawerCount: document.getElementById('cart-drawer-count'),
    cartItemsList: document.getElementById('cart-items-list'),
    emptyCartView: document.getElementById('empty-cart-view'),
    cartDrawerFooter: document.getElementById('cart-drawer-footer'),
    startShoppingBtn: document.getElementById('start-shopping-btn'),
    shippingProgressText: document.getElementById('shipping-progress-text'),
    shippingProgressBar: document.getElementById('shipping-progress-bar'),
    cartCouponInput: document.getElementById('cart-coupon-input'),
    applyCouponBtn: document.getElementById('apply-coupon-btn'),
    couponFeedback: document.getElementById('coupon-feedback'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    cartDiscount: document.getElementById('cart-discount'),
    discountLabel: document.getElementById('discount-label'),
    cartShipping: document.getElementById('cart-shipping'),
    cartTotal: document.getElementById('cart-total'),
    proceedCheckoutBtn: document.getElementById('proceed-checkout-btn'),
    clearCartBtn: document.getElementById('clear-cart-btn'),

    wishlistDrawer: document.getElementById('wishlist-drawer'),
    wishlistDrawerClose: document.getElementById('wishlist-drawer-close'),
    wishlistDrawerCount: document.getElementById('wishlist-drawer-count'),
    wishlistItemsList: document.getElementById('wishlist-items-list'),
    emptyWishlistView: document.getElementById('empty-wishlist-view'),
    startWishlistShoppingBtn: document.getElementById('start-wishlist-shopping-btn'),

    // Modals
    productModalOverlay: document.getElementById('product-modal-overlay'),
    productModalClose: document.getElementById('product-modal-close'),
    productModalContent: document.getElementById('product-modal-content'),

    checkoutModalOverlay: document.getElementById('checkout-modal-overlay'),
    checkoutModalClose: document.getElementById('checkout-modal-close'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutItemsPreview: document.getElementById('checkout-items-preview'),
    coSubtotal: document.getElementById('co-subtotal'),
    coDiscountRow: document.getElementById('co-discount-row'),
    coDiscount: document.getElementById('co-discount'),
    coShipping: document.getElementById('co-shipping'),
    coTotal: document.getElementById('co-total'),
    checkoutPayTotal: document.getElementById('checkout-pay-total'),

    orderSuccessModalOverlay: document.getElementById('order-success-modal-overlay'),
    continueShoppingBtn: document.getElementById('continue-shopping-btn'),
    receiptOrderId: document.getElementById('receipt-order-id'),
    receiptDeliveryDate: document.getElementById('receipt-delivery-date'),
    receiptShippingAddress: document.getElementById('receipt-shipping-address'),
    receiptTotalPaid: document.getElementById('receipt-total-paid'),

    // Forms & Other Controls
    contactForm: document.getElementById('contact-form'),
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    backToTopBtn: document.getElementById('back-to-top-btn'),
    toastContainer: document.getElementById('toast-container'),
    copyPromoBtn: document.getElementById('copy-promo-btn'),
    currentYearSpan: document.getElementById('current-year'),

    // Countdown Timer
    countdownHours: document.getElementById('countdown-hours'),
    countdownMinutes: document.getElementById('countdown-minutes'),
    countdownSeconds: document.getElementById('countdown-seconds')
  };

  /* ============================================================================
     4. LOCAL STORAGE PERSISTENCE HELPERS
     ============================================================================ */
  function loadStoredData() {
    // Theme preference
    const storedTheme = localStorage.getItem('aura_theme') || 'light';
    state.theme = storedTheme;
    applyTheme(storedTheme);

    // Cart items
    try {
      const storedCart = localStorage.getItem('aura_cart');
      if (storedCart) state.cart = JSON.parse(storedCart);
    } catch (e) {
      console.warn('Failed to parse cart storage:', e);
      state.cart = [];
    }

    // Wishlist items
    try {
      const storedWishlist = localStorage.getItem('aura_wishlist');
      if (storedWishlist) state.wishlist = JSON.parse(storedWishlist);
    } catch (e) {
      console.warn('Failed to parse wishlist storage:', e);
      state.wishlist = [];
    }

    // Applied Coupon
    try {
      const storedCoupon = localStorage.getItem('aura_coupon');
      if (storedCoupon) state.appliedCoupon = JSON.parse(storedCoupon);
    } catch (e) {
      state.appliedCoupon = null;
    }
  }

  function saveCart() {
    localStorage.setItem('aura_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('aura_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
  }

  /* ============================================================================
     5. THEME TOGGLE ENGINE
     ============================================================================ */
  function applyTheme(theme) {
    dom.html.setAttribute('data-theme', theme);
    if (dom.themeModeText) {
      dom.themeModeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
    const icon = dom.themeToggleBtn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    localStorage.setItem('aura_theme', theme);
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(state.theme);
    showToast(`Switched to ${state.theme} mode`, 'info');
  }

  /* ============================================================================
     6. HERO SLIDER CAROUSEL
     ============================================================================ */
  function initHeroSlider() {
    const totalSlides = dom.heroSlides.length;
    if (totalSlides === 0) return;

    function goToSlide(index) {
      state.currentHeroSlide = (index + totalSlides) % totalSlides;
      dom.heroSlides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === state.currentHeroSlide);
      });

      const indicators = dom.sliderIndicators.querySelectorAll('.indicator-dot');
      indicators.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === state.currentHeroSlide);
      });
    }

    function nextSlide() {
      goToSlide(state.currentHeroSlide + 1);
    }

    function prevSlide() {
      goToSlide(state.currentHeroSlide - 1);
    }

    if (dom.sliderNextBtn) dom.sliderNextBtn.addEventListener('click', () => {
      nextSlide();
      resetSliderTimer();
    });

    if (dom.sliderPrevBtn) dom.sliderPrevBtn.addEventListener('click', () => {
      prevSlide();
      resetSliderTimer();
    });

    const indicatorDots = dom.sliderIndicators.querySelectorAll('.indicator-dot');
    indicatorDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
        goToSlide(slideIndex);
        resetSliderTimer();
      });
    });

    function startSliderTimer() {
      state.heroTimer = setInterval(nextSlide, 6000);
    }

    function resetSliderTimer() {
      clearInterval(state.heroTimer);
      startSliderTimer();
    }

    // Pause on hover
    if (dom.heroSlider) {
      dom.heroSlider.addEventListener('mouseenter', () => clearInterval(state.heroTimer));
      dom.heroSlider.addEventListener('mouseleave', () => startSliderTimer());
    }

    startSliderTimer();
  }

  /* ============================================================================
     7. FLASH SALE COUNTDOWN TIMER
     ============================================================================ */
  function initCountdownTimer() {
    let totalSeconds = (18 * 3600) + (42 * 60) + 15; // Set base countdown duration

    function tick() {
      if (totalSeconds <= 0) {
        totalSeconds = 24 * 3600; // auto-refresh cycle
      }
      totalSeconds--;

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      if (dom.countdownHours) dom.countdownHours.textContent = String(hours).padStart(2, '0');
      if (dom.countdownMinutes) dom.countdownMinutes.textContent = String(minutes).padStart(2, '0');
      if (dom.countdownSeconds) dom.countdownSeconds.textContent = String(seconds).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ============================================================================
     8. CATEGORY COUNTS AND FILTER SETUP
     ============================================================================ */
  function updateCategoryPillsCount() {
    const counts = {
      all: state.products.length,
      men: state.products.filter(p => p.category === 'men').length,
      women: state.products.filter(p => p.category === 'women').length,
      kids: state.products.filter(p => p.category === 'kids').length,
      shoes: state.products.filter(p => p.category === 'shoes').length,
      accessories: state.products.filter(p => p.category === 'accessories').length
    };

    for (const [cat, count] of Object.entries(counts)) {
      const countEl = document.getElementById(`count-${cat}`);
      if (countEl) countEl.textContent = count;
    }
  }

  /* ============================================================================
     9. PRODUCT FILTERING & SORTING ENGINE
     ============================================================================ */
  function filterAndSortProducts() {
    let list = [...state.products];

    // Filter by Category
    if (state.filters.category && state.filters.category !== 'all') {
      if (state.filters.category === 'sale') {
        list = list.filter(p => p.isSale);
      } else {
        list = list.filter(p => p.category.toLowerCase() === state.filters.category.toLowerCase());
      }
    }

    // Filter by Search Query
    if (state.filters.search.trim()) {
      const q = state.filters.search.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q)
      );
    }

    // Filter by Maximum Price
    list = list.filter(p => p.price <= state.filters.maxPrice);

    // Filter by Selected Sizes
    if (state.filters.selectedSizes.length > 0) {
      list = list.filter(p =>
        p.sizes.some(size => state.filters.selectedSizes.includes(size))
      );
    }

    // Filter by Selected Colors
    if (state.filters.selectedColors.length > 0) {
      list = list.filter(p =>
        p.colors.some(col => state.filters.selectedColors.includes(col.name))
      );
    }

    // Filter by Special Tags
    if (state.filters.onSaleOnly) {
      list = list.filter(p => p.isSale);
    }
    if (state.filters.isNewOnly) {
      list = list.filter(p => p.isNew);
    }

    // Sort Results
    switch (state.sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        list.sort((a, b) => (b.isNew === true ? 1 : 0) - (a.isNew === true ? 1 : 0));
        break;
      case 'featured':
      default:
        list.sort((a, b) => (b.isFeatured === true ? 1 : 0) - (a.isFeatured === true ? 1 : 0));
        break;
    }

    renderProductsGrid(list);
    renderActiveFilterChips();
    updateToolbarHeader(list.length);
  }

  function updateToolbarHeader(count) {
    if (dom.productCountLabel) {
      dom.productCountLabel.textContent = `Showing ${count} item${count === 1 ? '' : 's'}`;
    }

    let catName = 'All Products';
    if (state.filters.category === 'men') catName = "Men's Collection";
    else if (state.filters.category === 'women') catName = "Women's Collection";
    else if (state.filters.category === 'kids') catName = "Kids & Junior";
    else if (state.filters.category === 'shoes') catName = "Footwear";
    else if (state.filters.category === 'accessories') catName = "Accessories";
    else if (state.filters.category === 'sale') catName = "Sale & Archive Deals";

    if (state.filters.search) {
      catName = `Search: "${state.filters.search}"`;
    }

    if (dom.shopCatalogTitle) dom.shopCatalogTitle.textContent = catName;

    // Mobile filter active counter
    const activeFiltersCount =
      (state.filters.category !== 'all' ? 1 : 0) +
      state.filters.selectedSizes.length +
      state.filters.selectedColors.length +
      (state.filters.maxPrice < 300 ? 1 : 0) +
      (state.filters.onSaleOnly ? 1 : 0) +
      (state.filters.isNewOnly ? 1 : 0);

    if (dom.activeFilterPillCount) {
      dom.activeFilterPillCount.textContent = activeFiltersCount > 0 ? `(${activeFiltersCount})` : '';
    }
  }

  /* ============================================================================
     10. RENDER PRODUCT GRID & CARDS
     ============================================================================ */
  function renderProductsGrid(products) {
    if (!dom.productsGrid) return;

    if (products.length === 0) {
      dom.productsGrid.innerHTML = '';
      dom.emptyState.style.display = 'block';
      return;
    }

    dom.emptyState.style.display = 'none';

    dom.productsGrid.innerHTML = products.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);
      const discountPercent = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;

      // Badges
      let badgesHtml = '';
      if (product.isSale && discountPercent) {
        badgesHtml += `<span class="badge-tag sale">-${discountPercent}%</span>`;
      }
      if (product.isNew) {
        badgesHtml += `<span class="badge-tag new">New</span>`;
      }

      // Color dots
      const colorDotsHtml = product.colors.slice(0, 4).map(c =>
        `<span class="swatch-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`
      ).join('');

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-thumb-box">
            <div class="product-badges-group">
              ${badgesHtml}
            </div>

            <div class="product-actions-bar">
              <button class="card-action-btn wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                data-id="${product.id}" 
                aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
                title="${isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}">
                <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
              </button>
              <button class="card-action-btn quick-view-btn" 
                data-id="${product.id}" 
                aria-label="Quick View ${escapeHtml(product.name)}"
                title="Quick View Details">
                <i class="fa-regular fa-eye"></i>
              </button>
            </div>

            <img src="${product.image}" 
                 alt="${escapeHtml(product.name)}" 
                 loading="lazy" 
                 onerror="this.onerror=null; this.src=createSvgPlaceholder('${escapeHtml(product.name)}', '${product.category}');">

            <button class="quick-add-btn" data-id="${product.id}">
              <i class="fa-solid fa-bag-shopping"></i> Quick Add to Bag
            </button>
          </div>

          <div class="product-info-box">
            <div class="product-meta-row">
              <span class="product-category-tag">${product.category} &bull; ${product.subCategory}</span>
              <div class="product-rating" title="${product.rating} stars out of 5 (${product.reviewsCount} reviews)">
                <i class="fa-solid fa-star"></i>
                <span>${product.rating.toFixed(1)}</span>
                <span class="text-muted">(${product.reviewsCount})</span>
              </div>
            </div>

            <h3 class="product-title">
              <a href="#quick-view" class="open-modal-link" data-id="${product.id}">${escapeHtml(product.name)}</a>
            </h3>

            <div class="product-price-row">
              <span class="product-current-price">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
              ${discountPercent ? `<span class="product-discount-pill">Save $${(product.originalPrice - product.price).toFixed(2)}</span>` : ''}
            </div>

            <div class="product-swatch-dots">
              ${colorDotsHtml}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    attachProductCardEvents();
  }

  function attachProductCardEvents() {
    // Quick Add
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          addToCart(prod, prod.sizes[0], prod.colors[0].name, 1);
        }
      });
    });

    // Quick View
    document.querySelectorAll('.quick-view-btn, .open-modal-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          openProductModal(prod);
        }
      });
    });

    // Wishlist Toggle
    document.querySelectorAll('.wishlist-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        toggleWishlist(id);
      });
    });
  }

  /* ============================================================================
     11. ACTIVE FILTER CHIPS
     ============================================================================ */
  function renderActiveFilterChips() {
    if (!dom.activeFilterChips) return;
    const chips = [];

    if (state.filters.category !== 'all') {
      chips.push({
        label: `Category: ${state.filters.category}`,
        onRemove: () => setCategoryFilter('all')
      });
    }

    if (state.filters.search) {
      chips.push({
        label: `Keyword: "${state.filters.search}"`,
        onRemove: () => {
          state.filters.search = '';
          dom.globalSearchInput.value = '';
          dom.clearSearchBtn.style.display = 'none';
          filterAndSortProducts();
        }
      });
    }

    if (state.filters.maxPrice < 300) {
      chips.push({
        label: `Under $${state.filters.maxPrice}`,
        onRemove: () => {
          state.filters.maxPrice = 300;
          dom.priceSlider.value = 300;
          dom.priceValueIndicator.textContent = '$300';
          filterAndSortProducts();
        }
      });
    }

    state.filters.selectedSizes.forEach(size => {
      chips.push({
        label: `Size: ${size}`,
        onRemove: () => {
          state.filters.selectedSizes = state.filters.selectedSizes.filter(s => s !== size);
          updateSizeButtonsUI();
          filterAndSortProducts();
        }
      });
    });

    state.filters.selectedColors.forEach(color => {
      chips.push({
        label: `Color: ${color}`,
        onRemove: () => {
          state.filters.selectedColors = state.filters.selectedColors.filter(c => c !== color);
          updateColorButtonsUI();
          filterAndSortProducts();
        }
      });
    });

    if (state.filters.onSaleOnly) {
      chips.push({
        label: 'On Sale Only',
        onRemove: () => {
          state.filters.onSaleOnly = false;
          dom.filterSaleCheckbox.checked = false;
          filterAndSortProducts();
        }
      });
    }

    if (state.filters.isNewOnly) {
      chips.push({
        label: 'New Arrivals',
        onRemove: () => {
          state.filters.isNewOnly = false;
          dom.filterNewCheckbox.checked = false;
          filterAndSortProducts();
        }
      });
    }

    if (chips.length === 0) {
      dom.activeFilterChips.innerHTML = '';
      return;
    }

    dom.activeFilterChips.innerHTML = chips.map((chip, idx) => `
      <div class="filter-chip">
        <span>${escapeHtml(chip.label)}</span>
        <button type="button" data-chip-idx="${idx}" aria-label="Remove filter">&times;</button>
      </div>
    `).join('') + `
      <button class="btn-text" id="clear-all-chips-btn" style="font-size: 0.8rem; margin-left: 0.5rem;">Clear All</button>
    `;

    // Chip removal click handling
    dom.activeFilterChips.querySelectorAll('button[data-chip-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-chip-idx'), 10);
        if (chips[idx]) chips[idx].onRemove();
      });
    });

    const clearAllBtn = document.getElementById('clear-all-chips-btn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', resetAllFilters);
    }
  }

  function setCategoryFilter(category) {
    state.filters.category = category;
    dom.categoryFilterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === category);
    });
    filterAndSortProducts();
  }

  function resetAllFilters() {
    state.filters.category = 'all';
    state.filters.search = '';
    state.filters.maxPrice = 300;
    state.filters.selectedSizes = [];
    state.filters.selectedColors = [];
    state.filters.onSaleOnly = false;
    state.filters.isNewOnly = false;

    // Reset controls
    if (dom.globalSearchInput) dom.globalSearchInput.value = '';
    if (dom.clearSearchBtn) dom.clearSearchBtn.style.display = 'none';
    if (dom.priceSlider) dom.priceSlider.value = 300;
    if (dom.priceValueIndicator) dom.priceValueIndicator.textContent = '$300';
    if (dom.filterSaleCheckbox) dom.filterSaleCheckbox.checked = false;
    if (dom.filterNewCheckbox) dom.filterNewCheckbox.checked = false;

    dom.categoryFilterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
    });

    updateSizeButtonsUI();
    updateColorButtonsUI();
    filterAndSortProducts();
    showToast('Filters have been reset', 'info');
  }

  function updateSizeButtonsUI() {
    dom.sizeFiltersContainer.querySelectorAll('.size-pill').forEach(btn => {
      const size = btn.getAttribute('data-size');
      btn.classList.toggle('active', state.filters.selectedSizes.includes(size));
    });
  }

  function updateColorButtonsUI() {
    dom.colorFiltersContainer.querySelectorAll('.color-swatch-btn').forEach(btn => {
      const color = btn.getAttribute('data-color');
      btn.classList.toggle('active', state.filters.selectedColors.includes(color));
    });
  }

  /* ============================================================================
     12. LIVE SEARCH AUTOCOMPLETE
     ============================================================================ */
  function initLiveSearch() {
    if (!dom.globalSearchInput) return;

    dom.globalSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      dom.clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';

      if (query.length < 2) {
        dom.searchResultsDropdown.style.display = 'none';
        state.filters.search = query;
        filterAndSortProducts();
        return;
      }

      state.filters.search = query;
      filterAndSortProducts();

      // Autocomplete list
      const matches = state.products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);

      if (matches.length === 0) {
        dom.searchResultsDropdown.innerHTML = `<div class="search-no-results">No matching pieces found for "${escapeHtml(query)}"</div>`;
        dom.searchResultsDropdown.style.display = 'block';
        return;
      }

      dom.searchResultsDropdown.innerHTML = matches.map(p => `
        <div class="search-item-row" data-id="${p.id}">
          <img src="${p.image}" class="search-item-img" alt="${escapeHtml(p.name)}" onerror="this.onerror=null; this.src=createSvgPlaceholder('${escapeHtml(p.name)}', '${p.category}');">
          <div class="search-item-info">
            <h4 class="search-item-title">${escapeHtml(p.name)}</h4>
            <div class="search-item-price">$${p.price.toFixed(2)}</div>
          </div>
        </div>
      `).join('');

      dom.searchResultsDropdown.style.display = 'block';

      // Dropdown clicks
      dom.searchResultsDropdown.querySelectorAll('.search-item-row').forEach(row => {
        row.addEventListener('click', () => {
          const id = row.getAttribute('data-id');
          const prod = PRODUCTS.find(p => p.id === id);
          if (prod) {
            dom.searchResultsDropdown.style.display = 'none';
            openProductModal(prod);
          }
        });
      });
    });

    dom.clearSearchBtn.addEventListener('click', () => {
      dom.globalSearchInput.value = '';
      dom.clearSearchBtn.style.display = 'none';
      dom.searchResultsDropdown.style.display = 'none';
      state.filters.search = '';
      filterAndSortProducts();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dom.globalSearchInput.contains(e.target) && !dom.searchResultsDropdown.contains(e.target)) {
        dom.searchResultsDropdown.style.display = 'none';
      }
    });
  }

  /* ============================================================================
     13. SHOPPING CART ENGINE
     ============================================================================ */
  function addToCart(product, size, color, quantity = 1) {
    const selectedSize = size || product.sizes[0] || 'Standard';
    const selectedColor = color || (product.colors[0] ? product.colors[0].name : 'Default');

    // Find if line item already exists
    const existingIndex = state.cart.findIndex(item =>
      item.id === product.id &&
      item.size === selectedSize &&
      item.color === selectedColor
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
      });
    }

    saveCart();
    openCartDrawer();
    showToast(`Added "${product.name}" to shopping bag`, 'success');
  }

  function updateCartItemQuantity(index, newQty) {
    if (newQty <= 0) {
      removeCartItem(index);
      return;
    }
    state.cart[index].quantity = newQty;
    saveCart();
  }

  function removeCartItem(index) {
    const removedItem = state.cart[index];
    state.cart.splice(index, 1);
    saveCart();
    if (removedItem) {
      showToast(`Removed "${removedItem.name}" from bag`, 'info');
    }
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    state.appliedCoupon = null;
    localStorage.removeItem('aura_coupon');
    saveCart();
    showToast('Shopping bag cleared', 'info');
  }

  function calculateCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let discountAmount = 0;
    if (state.appliedCoupon) {
      if (state.appliedCoupon.discountPercent) {
        discountAmount = subtotal * state.appliedCoupon.discountPercent;
      } else if (state.appliedCoupon.fixedDiscount) {
        discountAmount = Math.min(subtotal, state.appliedCoupon.fixedDiscount);
      }
    }

    const freeShipping = (subtotal >= FREE_SHIPPING_THRESHOLD) || (state.appliedCoupon && state.appliedCoupon.freeShipping);
    const shipping = subtotal > 0 ? (freeShipping ? 0.00 : STANDARD_SHIPPING_FEE) : 0.00;
    const total = Math.max(0, subtotal - discountAmount + shipping);

    return { subtotal, discountAmount, shipping, total, freeShipping };
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Header badge
    if (dom.cartBadge) {
      dom.cartBadge.textContent = totalItems;
      dom.cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (dom.cartDrawerCount) {
      dom.cartDrawerCount.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;
    }

    // Totals calculations
    const totals = calculateCartTotals();

    // Free shipping progress bar
    if (dom.shippingProgressText && dom.shippingProgressBar) {
      if (totals.subtotal >= FREE_SHIPPING_THRESHOLD || totals.freeShipping) {
        dom.shippingProgressText.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> <strong>Congratulations!</strong> You unlocked <strong>Free Express Shipping!</strong>`;
        dom.shippingProgressBar.style.width = '100%';
      } else {
        const remaining = (FREE_SHIPPING_THRESHOLD - totals.subtotal).toFixed(2);
        const percent = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        dom.shippingProgressText.innerHTML = `Add <strong>$${remaining}</strong> more to unlock <strong>Free Express Shipping!</strong>`;
        dom.shippingProgressBar.style.width = `${percent}%`;
      }
    }

    // Check if empty
    if (state.cart.length === 0) {
      dom.cartItemsList.style.display = 'none';
      dom.cartDrawerFooter.style.display = 'none';
      dom.emptyCartView.style.display = 'flex';
      return;
    }

    dom.cartItemsList.style.display = 'flex';
    dom.cartDrawerFooter.style.display = 'block';
    dom.emptyCartView.style.display = 'none';

    // Render items list
    dom.cartItemsList.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item-row" data-index="${idx}">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-img" onerror="this.onerror=null; this.src=createSvgPlaceholder('${escapeHtml(item.name)}', '${item.category}');">
        
        <div class="cart-item-details">
          <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
          <span class="cart-item-spec">Size: <strong>${escapeHtml(item.size)}</strong> &bull; Color: <strong>${escapeHtml(item.color)}</strong></span>
          
          <div class="cart-item-price-wrap">
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="qty-stepper">
              <button class="qty-btn qty-minus" data-index="${idx}" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn qty-plus" data-index="${idx}" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>

        <button class="cart-item-remove-btn" data-index="${idx}" aria-label="Remove item" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    // Attach row events
    dom.cartItemsList.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        updateCartItemQuantity(idx, state.cart[idx].quantity - 1);
      });
    });

    dom.cartItemsList.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        updateCartItemQuantity(idx, state.cart[idx].quantity + 1);
      });
    });

    dom.cartItemsList.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        removeCartItem(idx);
      });
    });

    // Financial calculations UI
    if (dom.cartSubtotal) dom.cartSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;

    if (totals.discountAmount > 0) {
      dom.cartDiscountRow.style.display = 'flex';
      dom.cartDiscount.textContent = `-$${totals.discountAmount.toFixed(2)}`;
      dom.discountLabel.textContent = state.appliedCoupon ? state.appliedCoupon.code : 'PROMO';
    } else {
      dom.cartDiscountRow.style.display = 'none';
    }

    if (dom.cartShipping) {
      dom.cartShipping.textContent = totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`;
    }

    if (dom.cartTotal) dom.cartTotal.textContent = `$${totals.total.toFixed(2)}`;
  }

  /* Coupon Code Validator */
  function applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();

    if (!cleanCode) {
      showCouponFeedback('Please enter a promotional code', 'error');
      return;
    }

    if (cleanCode === 'STYLE20') {
      state.appliedCoupon = { code: 'STYLE20', discountPercent: 0.20 };
      localStorage.setItem('aura_coupon', JSON.stringify(state.appliedCoupon));
      showCouponFeedback('Coupon STYLE20 applied! 20% discount granted.', 'success');
      showToast('20% discount coupon applied!', 'success');
      updateCartUI();
    } else if (cleanCode === 'SAVE10') {
      state.appliedCoupon = { code: 'SAVE10', fixedDiscount: 10.00 };
      localStorage.setItem('aura_coupon', JSON.stringify(state.appliedCoupon));
      showCouponFeedback('$10 flat discount applied!', 'success');
      showToast('$10 discount applied!', 'success');
      updateCartUI();
    } else if (cleanCode === 'FREESHIP') {
      state.appliedCoupon = { code: 'FREESHIP', freeShipping: true };
      localStorage.setItem('aura_coupon', JSON.stringify(state.appliedCoupon));
      showCouponFeedback('Free shipping voucher applied!', 'success');
      showToast('Free shipping coupon applied!', 'success');
      updateCartUI();
    } else {
      showCouponFeedback('Invalid or expired coupon code. Try STYLE20', 'error');
    }
  }

  function showCouponFeedback(msg, type) {
    if (!dom.couponFeedback) return;
    dom.couponFeedback.textContent = msg;
    dom.couponFeedback.className = `coupon-feedback ${type}`;
  }

  /* ============================================================================
     14. WISHLIST ENGINE
     ============================================================================ */
  function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    const prod = PRODUCTS.find(p => p.id === productId);

    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast(`Removed "${prod ? prod.name : 'Item'}" from wishlist`, 'info');
    } else {
      state.wishlist.push(productId);
      showToast(`Saved "${prod ? prod.name : 'Item'}" to your wishlist!`, 'success');
    }

    saveWishlist();
    filterAndSortProducts(); // refreshes heart states on cards
  }

  function updateWishlistUI() {
    const count = state.wishlist.length;
    if (dom.wishlistBadge) {
      dom.wishlistBadge.textContent = count;
      dom.wishlistBadge.style.display = count > 0 ? 'flex' : 'none';
    }

    if (dom.wishlistDrawerCount) {
      dom.wishlistDrawerCount.textContent = `(${count} saved piece${count === 1 ? '' : 's'})`;
    }

    if (count === 0) {
      dom.wishlistItemsList.style.display = 'none';
      dom.emptyWishlistView.style.display = 'flex';
      return;
    }

    dom.wishlistItemsList.style.display = 'flex';
    dom.emptyWishlistView.style.display = 'none';

    const wishlistProducts = state.wishlist
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);

    dom.wishlistItemsList.innerHTML = wishlistProducts.map(prod => `
      <div class="cart-item-row" data-id="${prod.id}">
        <img src="${prod.image}" alt="${escapeHtml(prod.name)}" class="cart-item-img" onerror="this.onerror=null; this.src=createSvgPlaceholder('${escapeHtml(prod.name)}', '${prod.category}');">
        
        <div class="cart-item-details">
          <h4 class="cart-item-title">${escapeHtml(prod.name)}</h4>
          <span class="cart-item-spec">${prod.category} &bull; Rating: ${prod.rating}★</span>
          <span class="cart-item-price">$${prod.price.toFixed(2)}</span>
          
          <div class="wishlist-item-action">
            <button class="btn btn-primary btn-sm move-to-cart-btn" data-id="${prod.id}">
              <i class="fa-solid fa-bag-shopping"></i> Move to Bag
            </button>
          </div>
        </div>

        <button class="cart-item-remove-btn remove-wishlist-item" data-id="${prod.id}" title="Remove from wishlist">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');

    // Attach wishlist item actions
    dom.wishlistItemsList.querySelectorAll('.move-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const p = PRODUCTS.find(prod => prod.id === id);
        if (p) {
          addToCart(p, p.sizes[0], p.colors[0].name, 1);
          toggleWishlist(id); // remove from wishlist once in bag
        }
      });
    });

    dom.wishlistItemsList.querySelectorAll('.remove-wishlist-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        toggleWishlist(id);
      });
    });
  }

  /* ============================================================================
     15. PRODUCT DETAIL MODAL (QUICK VIEW)
     ============================================================================ */
  function openProductModal(product) {
    let selectedSize = product.sizes[0];
    let selectedColor = product.colors[0].name;
    let selectedQty = 1;

    const allImages = [product.image, ...(product.additionalImages || [])];
    let currentImageIndex = 0;

    const discountPercent = product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

    const isWishlisted = state.wishlist.includes(product.id);

    // Build modal markup
    dom.productModalContent.innerHTML = `
      <div class="modal-gallery-col">
        <div class="modal-main-image-wrap">
          <img id="modal-active-img" src="${allImages[0]}" alt="${escapeHtml(product.name)}" onerror="this.onerror=null; this.src=createSvgPlaceholder('${escapeHtml(product.name)}', '${product.category}');">
        </div>

        ${allImages.length > 1 ? `
          <div class="modal-thumbnail-strip">
            ${allImages.map((img, idx) => `
              <button class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
                <img src="${img}" alt="Thumbnail ${idx + 1}" onerror="this.onerror=null; this.src=createSvgPlaceholder('Preview', '');">
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="modal-info-col">
        <span class="modal-category-meta">${product.category} &bull; ${product.subCategory}</span>
        <h2 class="modal-product-title">${escapeHtml(product.name)}</h2>

        <div class="modal-rating-row">
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <span>${product.rating.toFixed(1)}</span>
          </div>
          <span class="text-muted">|</span>
          <span class="text-muted">${product.reviewsCount} verified reviews</span>
          <span class="text-muted">|</span>
          <span class="text-success"><i class="fa-solid fa-check"></i> In Stock</span>
        </div>

        <div class="modal-price-row">
          <span class="modal-current-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="modal-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          ${discountPercent ? `<span class="product-discount-pill">-${discountPercent}% OFF</span>` : ''}
        </div>

        <p class="modal-desc-text">${escapeHtml(product.description)}</p>

        <!-- Color Selection -->
        <div class="modal-option-block">
          <div class="modal-option-label">
            <span>Color: <strong id="modal-selected-color-label">${selectedColor}</strong></span>
          </div>
          <div class="modal-color-grid" id="modal-colors-wrap">
            ${product.colors.map((c, idx) => `
              <button type="button" class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
                data-color="${c.name}" 
                style="--swatch-color: ${c.hex}; ${c.hex === '#ffffff' ? 'border: 1px solid #d1d5db;' : ''}" 
                title="${c.name}">
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Size Selection -->
        <div class="modal-option-block">
          <div class="modal-option-label">
            <span>Select Size</span>
            <span class="btn-text" style="font-size: 0.75rem; cursor: pointer;" id="modal-size-guide-btn">Size Guide</span>
          </div>
          <div class="modal-size-grid" id="modal-sizes-wrap">
            ${product.sizes.map((s, idx) => `
              <button type="button" class="size-pill ${idx === 0 ? 'active' : ''}" data-size="${s}">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div class="modal-actions-row">
          <div class="modal-qty-control">
            <button type="button" class="modal-qty-btn" id="modal-qty-dec">-</button>
            <input type="number" class="modal-qty-input" id="modal-qty-val" value="1" min="1" max="10" readonly>
            <button type="button" class="modal-qty-btn" id="modal-qty-inc">+</button>
          </div>

          <button class="btn btn-primary btn-lg modal-add-cart-btn" id="modal-add-to-cart-btn">
            <i class="fa-solid fa-bag-shopping"></i> Add to Bag &bull; $<span id="modal-calc-price">${product.price.toFixed(2)}</span>
          </button>

          <button class="modal-wishlist-toggle ${isWishlisted ? 'active text-accent' : ''}" id="modal-wishlist-btn" title="Add to Wishlist">
            <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
        </div>

        <div class="modal-perks-box">
          <div><i class="fa-solid fa-truck-fast"></i> Free Global Express shipping on orders over $75</div>
          <div><i class="fa-solid fa-rotate-left"></i> 30-Day complimentary returns &amp; exchanges</div>
          <div><i class="fa-solid fa-shield-halved"></i> Ethically manufactured with certified sustainable fibers</div>
        </div>
      </div>
    `;

    // Interactive gallery thumbnails
    const mainImgEl = document.getElementById('modal-active-img');
    dom.productModalContent.querySelectorAll('.modal-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.productModalContent.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        mainImgEl.src = allImages[idx];
      });
    });

    // Color Swatch Selection
    const colorLabel = document.getElementById('modal-selected-color-label');
    dom.productModalContent.querySelectorAll('#modal-colors-wrap .color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.productModalContent.querySelectorAll('#modal-colors-wrap .color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.getAttribute('data-color');
        if (colorLabel) colorLabel.textContent = selectedColor;
      });
    });

    // Size Selection
    dom.productModalContent.querySelectorAll('#modal-sizes-wrap .size-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.productModalContent.querySelectorAll('#modal-sizes-wrap .size-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
      });
    });

    // Quantity Increment/Decrement
    const qtyInput = document.getElementById('modal-qty-val');
    const calcPrice = document.getElementById('modal-calc-price');

    document.getElementById('modal-qty-dec').addEventListener('click', () => {
      if (selectedQty > 1) {
        selectedQty--;
        qtyInput.value = selectedQty;
        calcPrice.textContent = (product.price * selectedQty).toFixed(2);
      }
    });

    document.getElementById('modal-qty-inc').addEventListener('click', () => {
      if (selectedQty < 10) {
        selectedQty++;
        qtyInput.value = selectedQty;
        calcPrice.textContent = (product.price * selectedQty).toFixed(2);
      }
    });

    // Add To Cart Button
    document.getElementById('modal-add-to-cart-btn').addEventListener('click', () => {
      addToCart(product, selectedSize, selectedColor, selectedQty);
      closeProductModal();
    });

    // Wishlist Button inside modal
    const modalWishlistBtn = document.getElementById('modal-wishlist-btn');
    modalWishlistBtn.addEventListener('click', () => {
      toggleWishlist(product.id);
      const isNowWishlisted = state.wishlist.includes(product.id);
      modalWishlistBtn.querySelector('i').className = isNowWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
      modalWishlistBtn.classList.toggle('active', isNowWishlisted);
    });

    // Size guide placeholder alert
    const sizeGuideBtn = document.getElementById('modal-size-guide-btn');
    if (sizeGuideBtn) {
      sizeGuideBtn.addEventListener('click', () => {
        showToast('Size fits true to standard EU/US tailoring.', 'info');
      });
    }

    // Open modal dialog
    dom.productModalOverlay.classList.add('open');
    dom.productModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    dom.productModalOverlay.classList.remove('open');
    dom.productModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ============================================================================
     16. CHECKOUT SYSTEM & VALIDATION
     ============================================================================ */
  function openCheckoutModal() {
    if (state.cart.length === 0) {
      showToast('Your shopping bag is empty!', 'error');
      return;
    }

    closeCartDrawer();
    renderCheckoutSummary();

    dom.checkoutModalOverlay.classList.add('open');
    dom.checkoutModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    dom.checkoutModalOverlay.classList.remove('open');
    dom.checkoutModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderCheckoutSummary() {
    const totals = calculateCartTotals();

    // Render items preview
    dom.checkoutItemsPreview.innerHTML = state.cart.map(item => `
      <div class="co-item-mini">
        <img src="${item.image}" class="co-item-thumb" alt="${escapeHtml(item.name)}" onerror="this.onerror=null; this.src=createSvgPlaceholder('${escapeHtml(item.name)}', '${item.category}');">
        <div class="co-item-info">
          <div class="co-item-title">${escapeHtml(item.name)} (${item.quantity}x)</div>
          <div class="text-muted" style="font-size: 0.75rem;">${item.size} / ${item.color}</div>
        </div>
        <div class="co-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `).join('');

    if (dom.coSubtotal) dom.coSubtotal.textContent = `$${totals.subtotal.toFixed(2)}`;

    if (totals.discountAmount > 0) {
      dom.coDiscountRow.style.display = 'flex';
      dom.coDiscount.textContent = `-$${totals.discountAmount.toFixed(2)}`;
    } else {
      dom.coDiscountRow.style.display = 'none';
    }

    if (dom.coShipping) {
      dom.coShipping.textContent = totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`;
    }

    if (dom.coTotal) dom.coTotal.textContent = `$${totals.total.toFixed(2)}`;
    if (dom.checkoutPayTotal) dom.checkoutPayTotal.textContent = `$${totals.total.toFixed(2)}`;
  }

  function initCheckoutForm() {
    if (!dom.checkoutForm) return;

    // Payment tab switcher
    const paymentRadios = dom.checkoutForm.querySelectorAll('input[name="payment-method"]');
    paymentRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.payment-tab').forEach(tab => tab.classList.remove('active'));
        radio.closest('.payment-tab').classList.add('active');

        const cardPanel = document.getElementById('card-inputs-panel');
        const paypalPanel = document.getElementById('paypal-panel');
        const codPanel = document.getElementById('cod-panel');

        if (cardPanel) cardPanel.style.display = radio.value === 'card' ? 'block' : 'none';
        if (paypalPanel) paypalPanel.style.display = radio.value === 'paypal' ? 'block' : 'none';
        if (codPanel) codPanel.style.display = radio.value === 'cod' ? 'block' : 'none';
      });
    });

    // Credit card input auto-formatting (groups of 4)
    const cardInput = document.getElementById('checkout-card-number');
    if (cardInput) {
      cardInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.substring(0, 16);
        val = val.replace(/(\d{4})/g, '$1 ').trim();
        e.target.value = val;
      });
    }

    // Expiry MM/YY formatting
    const expInput = document.getElementById('checkout-card-exp');
    if (expInput) {
      expInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length >= 2) {
          val = val.substring(0, 2) + '/' + val.substring(2, 4);
        }
        e.target.value = val.substring(0, 5);
      });
    }

    // Form submission validation
    dom.checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Helper for validation errors
      function validateField(id, errorId, validatorFn, errorMsg) {
        const field = document.getElementById(id);
        const err = document.getElementById(errorId);
        if (!field || !err) return true;

        if (!validatorFn(field.value)) {
          err.textContent = errorMsg;
          field.style.borderColor = 'var(--badge-sale)';
          isValid = false;
        } else {
          err.textContent = '';
          field.style.borderColor = '';
        }
      }

      // Customer info
      validateField('checkout-name', 'checkout-name-error', val => val.trim().length >= 3, 'Please enter your full name (minimum 3 characters)');
      validateField('checkout-email', 'checkout-email-error', val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()), 'Please enter a valid email address');
      validateField('checkout-phone', 'checkout-phone-error', val => val.trim().replace(/\D/g, '').length >= 8, 'Please enter a valid phone number');

      // Shipping address
      validateField('checkout-address', 'checkout-address-error', val => val.trim().length >= 5, 'Please enter your complete street address');
      validateField('checkout-city', 'checkout-city-error', val => val.trim().length >= 2, 'City is required');
      validateField('checkout-zip', 'checkout-zip-error', val => val.trim().length >= 3, 'Postal code is required');

      // Card validation if credit card chosen
      const selectedPayment = document.querySelector('input[name="payment-method"]:checked').value;
      if (selectedPayment === 'card') {
        validateField('checkout-card-number', 'checkout-card-number-error', val => val.replace(/\s/g, '').length === 16, 'Please enter a 16-digit card number');
        validateField('checkout-card-exp', 'checkout-card-exp-error', val => /^(0[1-9]|1[0-2])\/\d{2}$/.test(val.trim()), 'Enter valid expiry MM/YY');
        validateField('checkout-card-cvv', 'checkout-card-cvv-error', val => val.trim().length >= 3, 'Enter 3 or 4-digit CVV');
      }

      if (!isValid) {
        showToast('Please correct the highlighted errors', 'error');
        return;
      }

      // Simulate order processing
      const submitBtn = document.getElementById('submit-order-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const customerName = document.getElementById('checkout-name').value;
        const customerCity = document.getElementById('checkout-city').value;
        const totals = calculateCartTotals();

        // Close checkout and open success modal
        closeCheckoutModal();
        dom.checkoutForm.reset();

        openOrderSuccessModal({
          name: customerName,
          city: customerCity,
          total: totals.total
        });

        // Clear Cart
        state.cart = [];
        state.appliedCoupon = null;
        localStorage.removeItem('aura_cart');
        localStorage.removeItem('aura_coupon');
        updateCartUI();
      }, 1500);
    });
  }

  function openOrderSuccessModal(orderDetails) {
    const randomOrderId = '#AURA-' + Math.floor(100000 + Math.random() * 900000);

    if (dom.receiptOrderId) dom.receiptOrderId.textContent = randomOrderId;
    if (dom.receiptDeliveryDate) dom.receiptDeliveryDate.textContent = '3 - 5 Business Days';
    if (dom.receiptShippingAddress) dom.receiptShippingAddress.textContent = `${orderDetails.name}, ${orderDetails.city}`;
    if (dom.receiptTotalPaid) dom.receiptTotalPaid.textContent = `$${orderDetails.total.toFixed(2)}`;

    dom.orderSuccessModalOverlay.classList.add('open');
    dom.orderSuccessModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderSuccessModal() {
    dom.orderSuccessModalOverlay.classList.remove('open');
    dom.orderSuccessModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ============================================================================
     17. DRAWERS & BACKDROP INTERACTION
     ============================================================================ */
  function openCartDrawer() {
    closeWishlistDrawer();
    closeMobileNav();
    dom.cartDrawer.classList.add('open');
    dom.cartDrawer.setAttribute('aria-hidden', 'false');
    dom.backdropOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    dom.cartDrawer.classList.remove('open');
    dom.cartDrawer.setAttribute('aria-hidden', 'true');
    if (!dom.wishlistDrawer.classList.contains('open') && !dom.primaryNav.classList.contains('open')) {
      dom.backdropOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openWishlistDrawer() {
    closeCartDrawer();
    closeMobileNav();
    dom.wishlistDrawer.classList.add('open');
    dom.wishlistDrawer.setAttribute('aria-hidden', 'false');
    dom.backdropOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlistDrawer() {
    dom.wishlistDrawer.classList.remove('open');
    dom.wishlistDrawer.setAttribute('aria-hidden', 'true');
    if (!dom.cartDrawer.classList.contains('open') && !dom.primaryNav.classList.contains('open')) {
      dom.backdropOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openMobileNav() {
    closeCartDrawer();
    closeWishlistDrawer();
    dom.primaryNav.classList.add('open');
    dom.mobileMenuToggle.setAttribute('aria-expanded', 'true');
    dom.backdropOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    dom.primaryNav.classList.remove('open');
    dom.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    if (!dom.cartDrawer.classList.contains('open') && !dom.wishlistDrawer.classList.contains('open')) {
      dom.backdropOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openMobileFilters() {
    dom.shopSidebar.classList.add('open');
    dom.backdropOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileFilters() {
    dom.shopSidebar.classList.remove('open');
    dom.backdropOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ============================================================================
     18. TOAST NOTIFICATION SYSTEM
     ============================================================================ */
  function showToast(message, type = 'success') {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'error') iconClass = 'fa-solid fa-circle-exclamation';
    if (type === 'info') iconClass = 'fa-solid fa-circle-info';

    toast.innerHTML = `
      <i class="${iconClass} toast-icon"></i>
      <span>${escapeHtml(message)}</span>
    `;

    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-leave');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3500);
  }

  /* ============================================================================
     19. CONTACT & NEWSLETTER FORMS
     ============================================================================ */
  function initContactAndNewsletter() {
    // Contact Form
    if (dom.contactForm) {
      dom.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const msgInput = document.getElementById('contact-message');

        const nameErr = document.getElementById('contact-name-error');
        const emailErr = document.getElementById('contact-email-error');
        const msgErr = document.getElementById('contact-message-error');

        let valid = true;

        if (nameInput.value.trim().length < 2) {
          nameErr.textContent = 'Please enter your name';
          valid = false;
        } else {
          nameErr.textContent = '';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
          emailErr.textContent = 'Please enter a valid email address';
          valid = false;
        } else {
          emailErr.textContent = '';
        }

        if (msgInput.value.trim().length < 10) {
          msgErr.textContent = 'Message must be at least 10 characters long';
          valid = false;
        } else {
          msgErr.textContent = '';
        }

        if (valid) {
          dom.contactForm.reset();
          showToast('Inquiry sent successfully! Our concierge will reply within 24 hours.', 'success');
        }
      });
    }

    // Newsletter Form
    if (dom.newsletterForm) {
      dom.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailErr = document.getElementById('newsletter-email-error');
        const emailVal = dom.newsletterEmail.value.trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
          emailErr.textContent = 'Please enter a valid email address';
          return;
        }

        emailErr.textContent = '';
        dom.newsletterForm.reset();
        showToast('Welcome to the Atelier! Check your inbox for your 15% discount code.', 'success');
      });
    }

    // Copy Promo Code Badge Click
    if (dom.copyPromoBtn) {
      dom.copyPromoBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('STYLE20').then(() => {
          showToast('Coupon code "STYLE20" copied to clipboard!', 'info');
        }).catch(() => {
          showToast('Use promo code STYLE20 at checkout for 20% off!', 'info');
        });
      });
    }
  }

  /* ============================================================================
     20. FLOATING BACK TO TOP BUTTON
     ============================================================================ */
  function initBackToTop() {
    if (!dom.backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        dom.backToTopBtn.classList.add('visible');
      } else {
        dom.backToTopBtn.classList.remove('visible');
      }
    });

    dom.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ============================================================================
     21. SVG PLACEHOLDER FALLBACK GENERATOR
     ============================================================================ */
  function createSvgPlaceholder(name, category) {
    const cleanName = (name || 'Product').replace(/"/g, "'");
    const cleanCat = (category || 'Collection').toUpperCase();
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
        <rect width="600" height="800" fill="#f3f4f6"/>
        <circle cx="300" cy="360" r="120" fill="#e5e7eb"/>
        <text x="300" y="375" font-family="sans-serif" font-size="70" font-weight="bold" fill="#9ca3af" text-anchor="middle">✦</text>
        <text x="300" y="520" font-family="sans-serif" font-size="20" font-weight="bold" fill="#4b5563" text-anchor="middle" letter-spacing="4">${cleanCat}</text>
        <text x="300" y="560" font-family="serif" font-size="24" fill="#1f2937" text-anchor="middle">${cleanName}</text>
      </svg>
    `;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  window.createSvgPlaceholder = createSvgPlaceholder; // expose for img tag fallbacks

  /* ============================================================================
     22. UTILITY FUNCTIONS
     ============================================================================ */
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ============================================================================
     23. EVENT LISTENERS INITIALIZATION
     ============================================================================ */
  function attachEventListeners() {
    // Theme toggle
    dom.themeToggleBtn.addEventListener('click', toggleTheme);

    // Mobile nav toggle
    dom.mobileMenuToggle.addEventListener('click', openMobileNav);
    dom.mobileMenuClose.addEventListener('click', closeMobileNav);

    // Drawers toggle
    dom.cartToggleBtn.addEventListener('click', openCartDrawer);
    dom.cartDrawerClose.addEventListener('click', closeCartDrawer);

    dom.wishlistToggleBtn.addEventListener('click', openWishlistDrawer);
    dom.wishlistDrawerClose.addEventListener('click', closeWishlistDrawer);

    // Backdrop click
    dom.backdropOverlay.addEventListener('click', () => {
      closeCartDrawer();
      closeWishlistDrawer();
      closeMobileNav();
      closeMobileFilters();
    });

    // Modals close buttons
    dom.productModalClose.addEventListener('click', closeProductModal);
    dom.checkoutModalClose.addEventListener('click', closeCheckoutModal);
    dom.continueShoppingBtn.addEventListener('click', closeOrderSuccessModal);

    // Modal background click
    dom.productModalOverlay.addEventListener('click', (e) => {
      if (e.target === dom.productModalOverlay) closeProductModal();
    });
    dom.checkoutModalOverlay.addEventListener('click', (e) => {
      if (e.target === dom.checkoutModalOverlay) closeCheckoutModal();
    });
    dom.orderSuccessModalOverlay.addEventListener('click', (e) => {
      if (e.target === dom.orderSuccessModalOverlay) closeOrderSuccessModal();
    });

    // Keyboard ESC key handler
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
        closeCheckoutModal();
        closeOrderSuccessModal();
        closeCartDrawer();
        closeWishlistDrawer();
        closeMobileNav();
        closeMobileFilters();
      }
    });

    // Drawer Empty state CTA buttons
    if (dom.startShoppingBtn) {
      dom.startShoppingBtn.addEventListener('click', () => {
        closeCartDrawer();
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (dom.startWishlistShoppingBtn) {
      dom.startWishlistShoppingBtn.addEventListener('click', () => {
        closeWishlistDrawer();
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Coupon Code
    if (dom.applyCouponBtn) {
      dom.applyCouponBtn.addEventListener('click', () => {
        applyCoupon(dom.cartCouponInput.value);
      });
      dom.cartCouponInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyCoupon(dom.cartCouponInput.value);
        }
      });
    }

    // Cart actions
    if (dom.proceedCheckoutBtn) dom.proceedCheckoutBtn.addEventListener('click', openCheckoutModal);
    if (dom.clearCartBtn) dom.clearCartBtn.addEventListener('click', clearCart);

    // Filter controls: Categories in Sidebar
    dom.categoryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        setCategoryFilter(cat);
        if (window.innerWidth <= 768) closeMobileFilters();
      });
    });

    // Filter controls: Category Cards in Hero Grid
    dom.categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        setCategoryFilter(cat);
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const cat = card.getAttribute('data-category');
          setCategoryFilter(cat);
          document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Navigation links category clicks
    dom.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.getAttribute('data-category');
        if (cat) {
          setCategoryFilter(cat);
          closeMobileNav();
        } else {
          closeMobileNav();
        }
      });
    });

    // Special Tags Checkboxes
    if (dom.filterSaleCheckbox) {
      dom.filterSaleCheckbox.addEventListener('change', (e) => {
        state.filters.onSaleOnly = e.target.checked;
        filterAndSortProducts();
      });
    }

    if (dom.filterNewCheckbox) {
      dom.filterNewCheckbox.addEventListener('change', (e) => {
        state.filters.isNewOnly = e.target.checked;
        filterAndSortProducts();
      });
    }

    // Price Slider
    if (dom.priceSlider) {
      dom.priceSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        state.filters.maxPrice = val;
        dom.priceValueIndicator.textContent = `$${val}`;
        filterAndSortProducts();
      });
    }

    // Size Swatches Toggle
    if (dom.sizeFiltersContainer) {
      dom.sizeFiltersContainer.querySelectorAll('.size-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const size = btn.getAttribute('data-size');
          const idx = state.filters.selectedSizes.indexOf(size);
          if (idx > -1) {
            state.filters.selectedSizes.splice(idx, 1);
          } else {
            state.filters.selectedSizes.push(size);
          }
          updateSizeButtonsUI();
          filterAndSortProducts();
        });
      });
    }

    // Color Swatches Toggle
    if (dom.colorFiltersContainer) {
      dom.colorFiltersContainer.querySelectorAll('.color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const color = btn.getAttribute('data-color');
          const idx = state.filters.selectedColors.indexOf(color);
          if (idx > -1) {
            state.filters.selectedColors.splice(idx, 1);
          } else {
            state.filters.selectedColors.push(color);
          }
          updateColorButtonsUI();
          filterAndSortProducts();
        });
      });
    }

    // Reset Filters Buttons
    if (dom.resetFiltersBtn) dom.resetFiltersBtn.addEventListener('click', resetAllFilters);
    if (dom.emptyResetBtn) dom.emptyResetBtn.addEventListener('click', resetAllFilters);

    // Sort Dropdown
    if (dom.sortSelect) {
      dom.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        filterAndSortProducts();
      });
    }

    // Mobile Filters Sidebar
    if (dom.mobileFilterBtn) dom.mobileFilterBtn.addEventListener('click', openMobileFilters);
    if (dom.sidebarCloseBtn) dom.sidebarCloseBtn.addEventListener('click', closeMobileFilters);
    if (dom.applyFiltersBtn) dom.applyFiltersBtn.addEventListener('click', closeMobileFilters);

    // Current Year in Footer
    if (dom.currentYearSpan) {
      dom.currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  /* ============================================================================
     24. INITIALIZATION LIFECYCLE ENTRYPOINT
     ============================================================================ */
  function init() {
    loadStoredData();
    initHeroSlider();
    initCountdownTimer();
    updateCategoryPillsCount();
    initLiveSearch();
    initCheckoutForm();
    initContactAndNewsletter();
    initBackToTop();
    attachEventListeners();

    // Initial render
    filterAndSortProducts();
    updateCartUI();
    updateWishlistUI();
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
