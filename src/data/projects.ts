import type { ImageMetadata } from "astro";
import communityNightOut from "../assets/projects/cno.png";
import kitchenSync from "../assets/projects/kitchen-sync.png";
import tuneFinder from "../assets/projects/tune-finder.png";

export interface Project {
  title: string;
  image: ImageMetadata;
  github: string;
  showcase: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Community Night Out",
    image: communityNightOut,
    github: "https://github.com/SulkesLisa-FS/2511-WDV349-SulkesLisa/tree/main",
    showcase: "https://youtu.be/DuzNzsRAhEc?si=SXkEIInKKqEyrKQd",
    live: "https://2511-wdv-349-sulkes-lisa.vercel.app/",
  },
  {
    title: "Kitchen Sync",
    image: kitchenSync,
    github: "https://github.com/SulkesLisa-FS/CDA_Project_KitchenSync",
    showcase: "https://youtu.be/T2R6x69ha4M?si=AGu4tMbWFsQahZJa",
  },
  {
    title: "Spotify Tune Finder",
    image: tuneFinder,
    github: "https://github.com/SulkesLisa-FS/PP3_spotify-api/tree/main",
    showcase: "https://youtu.be/zHxIFRaOVTI?si=wp8vpjqNyJfhLNFh",
    live: "https://pp3-demo-app-215665657891.herokuapp.com/login",
  },
];
