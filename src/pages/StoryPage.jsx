import { useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { getStory } from "../data/stories";
import {
  StoryHero,
  StoryIntroduction,
  StoryTimeline,
  StoryCulture,
  StoryDesign,
  StoryClosing,
  StorySources,
  RelatedStories,
} from "../components/story/StorySections";
import NotFoundPage from "./NotFoundPage";

export default function StoryPage() {
  const { slug } = useParams();
  const story = getStory(slug);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  if (!story) return <NotFoundPage />;
  return (
    <main
      id="main-content"
      className="story-page"
      style={{ "--accent": story.accentColor }}
    >
      <motion.div
        className="reading-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <StoryHero story={story} />
      <StoryIntroduction story={story} />
      <StoryTimeline story={story} />
      <StoryCulture story={story} />
      <StoryDesign story={story} />
      <StoryClosing story={story} />
      <StorySources story={story} />
      <RelatedStories story={story} />
    </main>
  );
}
