import laptop1 from "@/assets/laptop-1.jpg";
import laptop2 from "@/assets/laptop-2.jpg";
import laptop3 from "@/assets/laptop-3.jpg";
import laptop4 from "@/assets/laptop-4.jpg";
import laptop5 from "@/assets/laptop-5.jpg";
import laptop6 from "@/assets/laptop-6.jpg";
import laptop7 from "@/assets/laptop-7.jpg";
import laptop8 from "@/assets/laptop-8.jpg";
import laptop9 from "@/assets/laptop-9.jpg";
import laptop10 from "@/assets/laptop-10.jpg";
import laptop11 from "@/assets/laptop-11.jpg";
import laptop12 from "@/assets/laptop-12.jpg";

export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    battery: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
}

export const laptops: Laptop[] = [
  {
    id: "1",
    name: "ProBook Ultra 15",
    brand: "TechNova",
    price: 74999,
    originalPrice: 89999,
    image: laptop1,
    category: "Ultrabook",
    specs: {
      processor: "Intel Core i7-13700H",
      ram: "16 GB DDR5",
      storage: "512 GB NVMe SSD",
      display: '15.6" FHD IPS',
      battery: "72 Wh",
    },
    rating: 4.5,
    reviews: 234,
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Storm GX Gaming",
    brand: "CyberEdge",
    price: 109999,
    originalPrice: 129999,
    image: laptop2,
    category: "Gaming",
    specs: {
      processor: "AMD Ryzen 9 7945HX",
      ram: "32 GB DDR5",
      storage: "1 TB NVMe SSD",
      display: '16" QHD 165Hz',
      battery: "90 Wh",
    },
    rating: 4.8,
    reviews: 189,
    inStock: true,
    badge: "Hot Deal",
  },
  {
    id: "3",
    name: "AeroSlim 14",
    brand: "LunaBook",
    price: 59999,
    originalPrice: 69999,
    image: laptop3,
    category: "Ultrabook",
    specs: {
      processor: "Intel Core i5-1340P",
      ram: "8 GB DDR4",
      storage: "256 GB SSD",
      display: '14" FHD IPS',
      battery: "56 Wh",
    },
    rating: 4.2,
    reviews: 312,
    inStock: true,
  },
  {
    id: "4",
    name: "FlexiTab 360",
    brand: "TechNova",
    price: 84999,
    originalPrice: 94999,
    image: laptop4,
    category: "2-in-1",
    specs: {
      processor: "Intel Core i7-1365U",
      ram: "16 GB LPDDR5",
      storage: "512 GB SSD",
      display: '13.3" FHD Touch',
      battery: "67 Wh",
    },
    rating: 4.4,
    reviews: 156,
    inStock: true,
    badge: "New Arrival",
  },
  {
    id: "5",
    name: "CreatorPro 16",
    brand: "PixelCraft",
    price: 134999,
    originalPrice: 149999,
    image: laptop5,
    category: "Workstation",
    specs: {
      processor: "Intel Core i9-13980HX",
      ram: "64 GB DDR5",
      storage: "2 TB NVMe SSD",
      display: '16" 4K OLED',
      battery: "100 Wh",
    },
    rating: 4.9,
    reviews: 87,
    inStock: true,
    badge: "Premium",
  },
  {
    id: "6",
    name: "BizElite 15",
    brand: "CoreTech",
    price: 64999,
    originalPrice: 74999,
    image: laptop6,
    category: "Business",
    specs: {
      processor: "Intel Core i5-1345U",
      ram: "16 GB DDR4",
      storage: "512 GB SSD",
      display: '15.6" FHD Anti-Glare',
      battery: "57 Wh",
    },
    rating: 4.3,
    reviews: 201,
    inStock: false,
  },
  {
    id: "7",
    name: "ValueBook 14",
    brand: "CoreTech",
    price: 34999,
    originalPrice: 44999,
    image: laptop7,
    category: "Budget",
    specs: {
      processor: "Intel Core i3-1215U",
      ram: "8 GB DDR4",
      storage: "256 GB SSD",
      display: '14" FHD IPS',
      battery: "42 Wh",
    },
    rating: 4.0,
    reviews: 478,
    inStock: true,
    badge: "Value Pick",
  },
  {
    id: "8",
    name: "Blaze RTX Pro",
    brand: "CyberEdge",
    price: 149999,
    originalPrice: 179999,
    image: laptop8,
    category: "Gaming",
    specs: {
      processor: "Intel Core i9-14900HX",
      ram: "32 GB DDR5",
      storage: "2 TB NVMe SSD",
      display: '17.3" QHD 240Hz',
      battery: "99 Wh",
    },
    rating: 4.9,
    reviews: 112,
    inStock: true,
    badge: "Top Rated",
  },
  {
    id: "9",
    name: "RoseAir Lite",
    brand: "LunaBook",
    price: 52999,
    originalPrice: 62999,
    image: laptop9,
    category: "Ultrabook",
    specs: {
      processor: "Apple M2 Chip",
      ram: "8 GB Unified",
      storage: "256 GB SSD",
      display: '13.6" Liquid Retina',
      battery: "52 Wh",
    },
    rating: 4.6,
    reviews: 345,
    inStock: true,
  },
  {
    id: "10",
    name: "ToughShield X14",
    brand: "ArmorTech",
    price: 119999,
    originalPrice: 139999,
    image: laptop10,
    category: "Workstation",
    specs: {
      processor: "Intel Xeon W-1370P",
      ram: "32 GB ECC DDR5",
      storage: "1 TB NVMe SSD",
      display: '14" FHD Anti-Glare',
      battery: "94 Wh",
    },
    rating: 4.7,
    reviews: 64,
    inStock: true,
    badge: "Rugged",
  },
  {
    id: "11",
    name: "CanvasTab Pro",
    brand: "PixelCraft",
    price: 92999,
    originalPrice: 109999,
    image: laptop11,
    category: "2-in-1",
    specs: {
      processor: "Qualcomm Snapdragon 8cx Gen 3",
      ram: "16 GB LPDDR5",
      storage: "512 GB SSD",
      display: '13" 2K OLED Touch',
      battery: "65 Wh",
    },
    rating: 4.5,
    reviews: 198,
    inStock: true,
    badge: "Editor's Choice",
  },
  {
    id: "12",
    name: "ExecutivePro 15",
    brand: "TechNova",
    price: 89999,
    originalPrice: 99999,
    image: laptop12,
    category: "Business",
    specs: {
      processor: "Intel Core i7-1365U",
      ram: "16 GB DDR5",
      storage: "512 GB NVMe SSD",
      display: '15.6" FHD IPS Anti-Glare',
      battery: "68 Wh",
    },
    rating: 4.4,
    reviews: 276,
    inStock: true,
  },
];

export const categories = ["All", "Ultrabook", "Gaming", "2-in-1", "Workstation", "Business", "Budget"];
