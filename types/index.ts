export interface MenuItem {
  title: string;
  href: string;
  children?: MenuItem[];
  badge?: string;
  isPagesMenu?: boolean;
  otherPages?: MenuItem[];
  shopPages?: MenuItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  email: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  liveChat: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
