import { useState } from "react";
import IntroLoader from "./components/IntroLoader";
import TopBar from "./components/TopBar";
import CommandPalette from "./components/CommandPalette";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";
import { pickDistinctClipPair } from "./data/characterClips";
import "./App.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [clips, setClips] = useState(pickDistinctClipPair);
  const { theme, toggleTheme } = useTheme();

  const replayIntro = () => {
    setClips(pickDistinctClipPair());
    setIntroKey((k) => k + 1);
    setShowIntro(true);
  };

  return (
    <>
      {showIntro && (
        <IntroLoader key={introKey} clip={clips.introClip} onFinish={() => setShowIntro(false)} />
      )}
      <div className="page">
        <TopBar theme={theme} onToggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />
        <Hero clip={clips.heroClip} />
        <Experience />
        <Projects />
        <Skills />
        <Contact onReplay={replayIntro} />
      </div>
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        onToggleTheme={toggleTheme}
        onReplayIntro={replayIntro}
      />
    </>
  );
}
