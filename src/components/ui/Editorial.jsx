import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Photo({ src, alt, className = "", eager = false, position }) {
  const isWebp = src.endsWith(".webp");
  return (
    <img
      src={src}
      srcSet={
        isWebp
          ? `${src.replace(".webp", "-small.webp")} 800w, ${src} 1920w`
          : undefined
      }
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 100vw"
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

export function Eyebrow({ children, className = "" }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function TextLink({ children, to, href, className = "" }) {
  const content = (
    <>
      {children}
      <ArrowUpRight size={19} strokeWidth={1.4} aria-hidden="true" />
    </>
  );
  return to ? (
    <Link className={`text-link ${className}`} to={to}>
      {content}
    </Link>
  ) : (
    <a className={`text-link ${className}`} href={href}>
      {content}
    </a>
  );
}

export function ScrollCue({ href = "#stories", label = "Cuộn để khám phá" }) {
  return (
    <a className="scroll-cue" href={href}>
      <span className="scroll-circle">
        <ArrowDown size={17} strokeWidth={1.3} />
      </span>
      <span>{label}</span>
    </a>
  );
}

export function StoryCard({ story, className = "", compact = false }) {
  return (
    <Link
      to={`/stories/${story.slug}`}
      className={`story-card ${compact ? "compact" : ""} ${className}`}
      style={{ "--card-accent": story.accentColor }}
    >
      <div className="card-image">
        <Photo
          src={story.heroImage}
          alt={story.imageAlt}
          position={story.focalPoint}
        />
        <span className="card-number">{story.id}</span>
        <span className="card-open">
          <ArrowUpRight size={23} strokeWidth={1.3} />
        </span>
      </div>
      <div className="card-meta">
        <span>{story.category}</span>
        <span>SAIGON STORIES</span>
      </div>
      <h3>{story.title}</h3>
      {!compact && <p className="card-description">{story.description}</p>}
    </Link>
  );
}
