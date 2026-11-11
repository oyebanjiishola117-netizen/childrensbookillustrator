import pencilDreams from "@/assets/portfolio/ssdaa.png.asset.json";
import artieSpread1 from "@/assets/portfolio/ssee.png.asset.json";
import artieSpread2 from "@/assets/portfolio/dder.png.asset.json";
import artieSpread3 from "@/assets/portfolio/deew.png.asset.json";
import backpackGirl from "@/assets/portfolio/dssaa.png.asset.json";
import faithCover from "@/assets/portfolio/dccvv.png.asset.json";
import duckFeetCover from "@/assets/portfolio/ffrr.png.asset.json";
import dreamer from "@/assets/portfolio/dreamer.jpg.asset.json";
import earthHelpers from "@/assets/portfolio/earth-helpers.jpg.asset.json";
import natureTrip from "@/assets/portfolio/nature-trip.jpg.asset.json";
import jungle from "@/assets/portfolio/jungle.jpg.asset.json";
import bunnyColoring from "@/assets/portfolio/bunny-coloring.jpg.asset.json";
import door from "@/assets/portfolio/door.jpg.asset.json";
import kneeling from "@/assets/portfolio/kneeling.jpg.asset.json";
import path from "@/assets/portfolio/path.jpg.asset.json";
import forest from "@/assets/portfolio/forest.jpg.asset.json";
import meadow from "@/assets/portfolio/meadow.jpg.asset.json";
import reaching from "@/assets/portfolio/reaching.jpg.asset.json";
import lookingUp from "@/assets/portfolio/looking-up.jpg.asset.json";
import windowImg from "@/assets/portfolio/window.jpg.asset.json";
import macaw from "@/assets/portfolio/macaw.jpg.asset.json";
import poppy from "@/assets/portfolio/poppy.jpg.asset.json";
import zara from "@/assets/portfolio/zara.jpg.asset.json";
import travel from "@/assets/portfolio/travel.jpg.asset.json";
import magicBook from "@/assets/portfolio/magic-book.jpg.asset.json";
import scouts from "@/assets/portfolio/scouts.jpg.asset.json";
import explorers from "@/assets/portfolio/explorers.jpg.asset.json";
import forestPath from "@/assets/portfolio/forest-path.jpg.asset.json";
import natureWalk from "@/assets/portfolio/nature-walk.jpg.asset.json";
import puppyRun from "@/assets/portfolio/puppy-run.jpg.asset.json";
import girlPuppy from "@/assets/portfolio/girl-puppy.jpg.asset.json";
import kindKids from "@/assets/portfolio/kind-kids.jpg.asset.json";

const liveAssetUrl = (path: string) =>
  new URL(path, "https://childrensbookillustrator.lovable.app").href;

export type PortfolioCategory =
  | "Book Covers"
  | "Interior Scenes"
  | "Character Design"
  | "Sketches"
  | "Coloring Book Covers";

export const portfolioCategories: PortfolioCategory[] = [
  "Book Covers",
  "Interior Scenes",
  "Character Design",
  "Sketches",
  "Coloring Book Covers",
];

export type PortfolioItem = {
  /** Image source. Use an imported asset or a public/ path. */
  src: string;
  title: string;
  caption: string;
  category: PortfolioCategory;
  alt: string;
  /** Mark the strongest pieces — they render first and larger. */
  featured?: boolean;
};


/**
 * Add a new piece by appending one object below. Nothing else needs to change:
 * the grid and lightbox read from this list.
 */
export const portfolioItems: PortfolioItem[] = [
  { src: liveAssetUrl(duckFeetCover.url), title: "Backpacks, Duck Feet, and a Whole Lot of Love", caption: "Cover for a cozy treehouse story.", category: "Book Covers", alt: "Book cover with three smiling children wearing backpacks by a lake and treehouse", featured: true },
  { src: liveAssetUrl(faithCover.url), title: "Faith That Lives in the Heart", caption: "Cover with a boy, his glowing backpack and two dogs.", category: "Book Covers", alt: "Book cover of a boy holding a glowing blue backpack between two dogs at sunset" },
  { src: liveAssetUrl(artieSpread1.url), title: "Artie — off to school", caption: "Spread from a picture book about starting the school day.", category: "Interior Scenes", alt: "Picture book spread of a boy tying his shoes and running into school" },
  { src: liveAssetUrl(artieSpread2.url), title: "Artie — a friend in need", caption: "Artie comforts Elsie on her first morning.", category: "Interior Scenes", alt: "Picture book spread of a boy comforting a sad girl and children building blocks" },
  { src: liveAssetUrl(artieSpread3.url), title: "Artie — Miss Cindy's class", caption: "Friends and a classroom scene.", category: "Interior Scenes", alt: "Picture book spread of three children waving and a teacher at a chalkboard" },
  { src: liveAssetUrl(pencilDreams.url), title: "Pencil dreams", caption: "A girl imagines flowers blooming from her drawings.", category: "Interior Scenes", alt: "Girl resting her chin on a pencil at a desk with glowing flowers around her", featured: true },
  { src: liveAssetUrl(backpackGirl.url), title: "Backpack girl — poses", caption: "Character poses and expressions.", category: "Character Design", alt: "Three poses of a red-haired girl with a green backpack" },
  { src: liveAssetUrl(door.url), title: "The secret door", caption: "A child steps through a glowing tree door into a hidden world.", category: "Interior Scenes", alt: "Child opening a glowing door in a giant tree, revealing colorful mushrooms and crystals", featured: true },
  { src: liveAssetUrl(meadow.url), title: "Chasing the cloud", caption: "A boy runs laughing through a summer meadow.", category: "Interior Scenes", alt: "Boy in a yellow sweater running through a meadow beneath a flowing cloud", featured: true },
  { src: liveAssetUrl(macaw.url), title: "Macaw", caption: "Watercolor study of a macaw in the rainforest.", category: "Character Design", alt: "Watercolor blue and gold macaw perched on a mossy branch", featured: true },
  { src: liveAssetUrl(magicBook.url), title: "The magic book", caption: "Dragons, unicorns and castles spill out of an open book.", category: "Interior Scenes", alt: "Girl with a pink bow amazed as fantasy creatures rise from her book", featured: true },
  { src: liveAssetUrl(zara.url), title: "Zara — character sheet", caption: "Poses, expressions, side and back views.", category: "Character Design", alt: "Pencil character sheet of a girl named Zara with expressions and turnarounds" },
  { src: liveAssetUrl(poppy.url), title: "Poppy — character studies", caption: "Pencil studies of poses, hair and expression.", category: "Sketches", alt: "Pencil sheet of many poses of a curly-haired girl named Poppy" },
  { src: liveAssetUrl(kneeling.url), title: "The tree door", caption: "Kneeling at a small carved door deep in the woods.", category: "Interior Scenes", alt: "Child in a green hoodie kneeling beside a glowing carved door in a tree" },
  { src: liveAssetUrl(path.url), title: "The glowing path", caption: "A trail of light leads deeper into the forest.", category: "Interior Scenes", alt: "Child by a tree looking at a glowing path through a night forest" },
  { src: liveAssetUrl(forest.url), title: "Into the old forest", caption: "First steps into an ancient wood.", category: "Interior Scenes", alt: "Child with a backpack standing among huge mossy trees and glowing mushrooms" },
  { src: liveAssetUrl(travel.url), title: "Dreaming of places", caption: "A girl and her dog imagine the world beyond the window.", category: "Book Covers", alt: "Watercolor of a girl and dog dreaming of world landmarks" },
  { src: liveAssetUrl(reaching.url), title: "A cloud to hold", caption: "Reaching for a small cloud under the old oak.", category: "Interior Scenes", alt: "Boy sitting under an oak tree reaching toward a small cloud" },
  { src: liveAssetUrl(lookingUp.url), title: "The unusual cloud", caption: "A boy spots one cloud that doesn't belong.", category: "Interior Scenes", alt: "Boy in a meadow looking up at a single low cloud" },
  { src: liveAssetUrl(windowImg.url), title: "A visitor at the window", caption: "A cloud waits just outside the bedroom window.", category: "Interior Scenes", alt: "Smiling boy sitting on a windowsill with a cloud outside" },
  { src: liveAssetUrl(explorers.url), title: "Little explorers", caption: "Magnifying glasses out in an enchanted wood.", category: "Interior Scenes", alt: "Boy and girl with magnifying glasses in a magical forest with rabbits" },
  { src: liveAssetUrl(natureWalk.url), title: "Nature walk", caption: "A class discovers bugs, birds and leaves.", category: "Interior Scenes", alt: "Children exploring a forest with magnifying glasses and binoculars" },
  { src: liveAssetUrl(scouts.url), title: "Off on an adventure", caption: "Two young scouts ready for the trail.", category: "Interior Scenes", alt: "Girl and boy scouts smiling in a colorful park" },
  { src: liveAssetUrl(forestPath.url), title: "The forest path", caption: "A boy sets off down a stone path into the jungle.", category: "Book Covers", alt: "Boy with an orange backpack walking down a jungle path" },
  { src: liveAssetUrl(puppyRun.url), title: "Racing home", caption: "A girl and her puppy dash down the street.", category: "Interior Scenes", alt: "Girl with beaded braids running with a puppy down a sunny street" },
  { src: liveAssetUrl(girlPuppy.url), title: "Best friends", caption: "A girl and her puppy on the front lawn.", category: "Character Design", alt: "Curly-haired girl sitting on grass beside a puppy" },
  { src: liveAssetUrl(dreamer.url), title: "Daydreamer", caption: "A girl sketches her ideas in a flower meadow.", category: "Character Design", alt: "Red-haired girl with yellow glasses writing in a notebook among flowers", featured: true },
  { src: liveAssetUrl(bunnyColoring.url), title: "Bunny coloring book", caption: "Cover showing the finished page beside the line art.", category: "Coloring Book Covers", alt: "Coloring book cover with a bunny half painted and half in outline" },
  { src: liveAssetUrl(earthHelpers.url), title: "Caring for the Earth", caption: "Children planting and watering on a sunny hill.", category: "Interior Scenes", alt: "Three children gardening in front of a large globe" },
  { src: liveAssetUrl(natureTrip.url), title: "School nature trip", caption: "A cheerful class heads up the forest trail.", category: "Interior Scenes", alt: "Group of schoolchildren and a teacher hiking a forest path" },
  { src: liveAssetUrl(jungle.url), title: "Jungle adventure", caption: "Friends follow a map through the rainforest.", category: "Interior Scenes", alt: "Kids with backpacks and a map walking through a jungle with parrots and monkeys" },
  { src: liveAssetUrl(kindKids.url), title: "Kind kids change the world", caption: "Two children plant a tree under a smiling Earth.", category: "Interior Scenes", alt: "Watercolor of two children planting a sapling with forest animals and a smiling planet Earth behind them" },
];

export const sortedPortfolioItems = (): PortfolioItem[] =>
  [...portfolioItems].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
