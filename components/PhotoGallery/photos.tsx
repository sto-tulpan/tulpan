import Img from "react-optimized-image";

interface Photo {
  src: string;
  width: number;
  height: number;
  size: 20 | 25 | 33 | 50 | 100;
  alt?: string;
  title?: string;
  component?: React.ReactElement;
}

export const photos: Photo[] = [
  {
    src: "1.jpg",
    width: 4032,
    height: 3024,
    size: 25,
    alt: "Наш замечательный въезд",
  },
  {
    src: "2.jpg",
    width: 4032,
    height: 3024,
    size: 25,
  },
  {
    src: "13.jpg",
    width: 10346,
    height: 3668,
    size: 50,
  },

  {
    src: "3.jpg",
    width: 4032,
    height: 3024,
    size: 20,
  },
  {
    src: "4.jpg",
    width: 4032,
    height: 3024,
    size: 20,
  },
  {
    src: "5.jpg",
    width: 4032,
    height: 3024,
    size: 20,
  },

  {
    src: "8.jpg",
    width: 4032,
    height: 3024,
    size: 20,
  },

  {
    src: "12.jpg",
    width: 4032,
    height: 3024,
    size: 20,
  },

  {
    src: "14.jpg",
    width: 12906,
    height: 3628,
    size: 50,
  },
  {
    src: "16.jpg",
    width: 4032,
    height: 3024,
    size: 25,
  },
  {
    src: "10.jpg",
    width: 4032,
    height: 3024,
    size: 25,
  },
];
