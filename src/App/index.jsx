import clsx from "clsx";
import { range } from "lodash-es";
import React, { useEffect, useRef, useState } from "react";
import withStyles from "react-jss";
import smoothScroll from "smoothscroll";
import styles from "./styles";

const Entry = ({ entryRef, isActive, classes, ...props }) => (
  <div
    ref={entryRef}
    className={clsx(classes.overflowContent, {
      [classes.overflowContent_active]: isActive,
    })}
    {...props}
  >
    {props.children}
  </div>
);

const App = ({ classes }) => {
  const [activeIdx, setActiveIdx] = useState(1);
  const [entryRef, setEntryRef] = useState(null);
  const scrollContainerRef = useRef();

  useEffect(() => {
    const intervalFn = setInterval(() => {
      if (activeIdx < 100) {
        setActiveIdx(activeIdx + 1);
      }
    }, 10000);
    return () => {
      clearInterval(intervalFn);
    };
  }, [activeIdx]);

  useEffect(() => {
    if (scrollContainerRef.current && entryRef) {
      smoothScroll(entryRef.offsetTop - scrollContainerRef.current.offsetTop, 500, null, scrollContainerRef.current);
    }
  }, [entryRef, scrollContainerRef]);

  const setRef = (i) => (er) => {
    if (i === activeIdx) {
      setEntryRef(er);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.fixedContainer}>
        <div className={classes.fixedContainerContent1}></div>
        <div className={classes.fixedContainerContent2}></div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.contentWrapper1}>
          <div className={classes.overflowContainer}>
            {range(1, 100).map((i) => (
              <div key={`a${i}`} className={classes.overflowContent}></div>
            ))}
          </div>
        </div>
        <div className={classes.contentWrapper2}>
          <div ref={scrollContainerRef} className={classes.overflowContainer}>
            {range(1, 100).map((i) => (
              <Entry
                key={`b${i}`}
                entryRef={setRef(i)}
                isActive={i === activeIdx}
                classes={classes}
              >
                Entry {i}
              </Entry>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
