import { useEffect, useRef, useState } from "react";
import "./Terminal.css";

const SESSIONS = [
  {
    cmd: "whoami",
    output: ["dhruv-khalasi — devops engineer @ hashtech innovations"],
  },
  {
    cmd: "terraform apply multi-env.tfplan",
    output: ["Plan: 8 to add, 0 to change, 0 to destroy.", "Apply complete! Resources: 8 added, 0 changed."],
  },
  {
    cmd: "kubectl get pods -n production",
    output: [
      "NAME                     READY   STATUS",
      "api-6d9f8b7c-x2k9p       1/1     Running",
      "worker-5c7d9f6b-mk3lq    1/1     Running",
    ],
  },
  {
    cmd: "kubectl top nodes",
    output: ["NAME      CPU%   MEMORY%", "node-1    34%    58%", "node-2    29%    51%"],
  },
  {
    cmd: "systemctl status nginx",
    output: ["● nginx.service — active (running)", "reverse proxy: healthy"],
  },
  {
    cmd: "echo $EDUCATION",
    output: ["8.52/10 CGPA — B.Tech IT, CHARUSAT University"],
  },
];

const TYPE_SPEED = 38;
const LINE_DELAY = 260;
const HOLD_AFTER = 1700;
const MAX_HISTORY = 3;

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const [visibleLines, setVisibleLines] = useState(0);
  const [cmdDone, setCmdDone] = useState(false);
  const scrollRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    clearAll();

    const session = SESSIONS[sessionIndex];
    setTypedCmd("");
    setCmdDone(false);
    setVisibleLines(0);

    let i = 0;
    const typeChar = () => {
      i += 1;
      setTypedCmd(session.cmd.slice(0, i));
      if (i < session.cmd.length) {
        timers.current.push(setTimeout(typeChar, TYPE_SPEED));
      } else {
        setCmdDone(true);
        revealLine(0);
      }
    };

    const revealLine = (n) => {
      if (n >= session.output.length) {
        timers.current.push(
          setTimeout(() => {
            setHistory((h) => [...h.slice(-(MAX_HISTORY - 1)), session]);
            setSessionIndex((idx) => (idx + 1) % SESSIONS.length);
          }, HOLD_AFTER)
        );
        return;
      }
      setVisibleLines(n + 1);
      timers.current.push(setTimeout(() => revealLine(n + 1), LINE_DELAY));
    };

    timers.current.push(setTimeout(typeChar, 300));

    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typedCmd, visibleLines]);

  const current = SESSIONS[sessionIndex];

  return (
    <div className="terminal">
      <div className="terminal-chrome">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--amber" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-title">dhruv@devops — zsh</span>
      </div>
      <div className="terminal-body" ref={scrollRef}>
        {history.map((h, hi) => (
          <div className="terminal-block" key={hi}>
            <p className="terminal-line">
              <span className="terminal-prompt">$</span> {h.cmd}
            </p>
            {h.output.map((line, li) => (
              <p className="terminal-output" key={li}>
                {line}
              </p>
            ))}
          </div>
        ))}
        <div className="terminal-block">
          <p className="terminal-line">
            <span className="terminal-prompt">$</span> {typedCmd}
            {!cmdDone && <span className="terminal-cursor" />}
          </p>
          {cmdDone &&
            current.output.slice(0, visibleLines).map((line, li) => (
              <p className="terminal-output" key={li}>
                {line}
              </p>
            ))}
          {cmdDone && visibleLines >= current.output.length && <span className="terminal-cursor terminal-cursor--idle" />}
        </div>
      </div>
    </div>
  );
}
