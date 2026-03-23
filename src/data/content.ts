import { Project, Service, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: 'luna-branding',
    title: 'Luna Cosmetics',
    category: 'Visual Identity',
    year: '2024',
    description: 'A minimalist branding system for a high-end organic skincare line.',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1600&auto=format&fit=crop'
    ],
    problem: 'The brand needed to stand out in a saturated market while maintaining an aura of exclusivity and natural purity.',
    process: 'We explored the intersection of celestial motifs and organic textures, resulting in a custom typeface and a muted, earthy palette.',
    outcome: 'A 40% increase in online engagement and a successful launch in three major retail chains.',
    tools: ['Adobe Illustrator', 'Figma', 'Cinema 4D']
  },
  {
    id: 'ethos-magazine',
    title: 'Ethos Editorial',
    category: 'Print Design',
    year: '2023',
    description: 'Redefining the modern architectural journal through bold typography and negative space.',
    thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop'
    ],
    problem: 'Traditional architectural magazines felt cluttered and failed to reflect the minimalist philosophy of the subjects they covered.',
    process: 'Implementing a strict 12-column grid and utilizing oversized serif headings to create a rhythmic reading experience.',
    outcome: 'Awarded "Best New Publication" at the 2023 Design Awards.',
    tools: ['Adobe InDesign', 'Photoshop']
  },
  {
    id: 'vanguard-tech',
    title: 'Vanguard Systems',
    category: 'Digital Experience',
    year: '2024',
    description: 'A futuristic visual language for a leading AI infrastructure provider.',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1600&auto=format&fit=crop'
    ],
    problem: 'The client needed to bridge the gap between complex technical capabilities and human-centric design.',
    process: 'Developed a generative pattern system that reacts to data inputs, paired with a high-contrast neon-on-dark aesthetic.',
    outcome: 'Secured $50M in Series B funding following the rebrand.',
    tools: ['Figma', 'After Effects', 'Spline']
  },
  {
    id: 'nomad-coffee',
    title: 'Nomad Roasters',
    category: 'Packaging',
    year: '2023',
    description: 'Sustainable packaging design for a global specialty coffee brand.',
    thumbnail: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop'
    ],
    problem: 'Creating a premium feel using only 100% compostable materials without compromising on visual impact.',
    process: 'Utilizing soy-based inks and tactile embossing to create a luxury experience that respects the environment.',
    outcome: 'Reduced plastic waste by 2 tons in the first year of implementation.',
    tools: ['Adobe Illustrator', 'Esko ArtiosCAD']
  }
];

export const services: Service[] = [
  {
    title: 'Brand Identity',
    description: 'Crafting cohesive visual systems that tell a compelling story across all touchpoints.',
    outcome: 'A distinct market presence that resonates with your target audience.'
  },
  {
    title: 'Editorial Design',
    description: 'Transforming content into immersive reading experiences through thoughtful layout and typography.',
    outcome: 'High-impact publications that command attention and retain engagement.'
  },
  {
    title: 'Digital Strategy',
    description: 'Designing intuitive interfaces and digital experiences that prioritize user needs and business goals.',
    outcome: 'Seamless interactions that drive conversions and build brand loyalty.'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Luna Cosmetics',
    content: 'Working with Aura was a revelation. They didn’t just design a logo; they built a world for our brand to live in.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Creative Director, Ethos',
    content: 'An exceptional eye for detail and a deep understanding of editorial rhythm. The results speak for themselves.'
  }
];
