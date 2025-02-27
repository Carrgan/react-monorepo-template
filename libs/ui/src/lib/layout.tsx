import styles from "./layout.module.scss";
import "./global.scss";

export function Layout({ children }: { children?: React.ReactElement }) {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <svg
              width="49px"
              height="32.2px"
              viewBox="0 0 590 422"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Plants</title>
              <defs>
                <circle id="path-1" cx="40" cy="40" r="40"></circle>
                <filter
                  x="-12.5%"
                  y="-10.0%"
                  width="125.0%"
                  height="125.0%"
                  filterUnits="objectBoundingBox"
                  id="filter-2"
                >
                  <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur
                    stdDeviation="3"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.384943783   0 0 0 0 0.157310247   0 0 0 0 0.329413831  0 0 0 1 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                  ></feColorMatrix>
                </filter>
                <filter
                  x="-15.0%"
                  y="-12.5%"
                  width="130.0%"
                  height="130.0%"
                  filterUnits="objectBoundingBox"
                  id="filter-3"
                >
                  <feMorphology
                    radius="2"
                    operator="erode"
                    in="SourceAlpha"
                    result="shadowSpreadInner1"
                  ></feMorphology>
                  <feGaussianBlur
                    stdDeviation="2.5"
                    in="shadowSpreadInner1"
                    result="shadowBlurInner1"
                  ></feGaussianBlur>
                  <feOffset
                    dx="5"
                    dy="0"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  ></feOffset>
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"
                  ></feComposite>
                  <feColorMatrix
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
                    type="matrix"
                    in="shadowInnerInner1"
                  ></feColorMatrix>
                </filter>
                <circle id="path-4" cx="48.3554819" cy="22.6411961" r="8.35548186"></circle>
                <filter
                  x="-9.0%"
                  y="-9.0%"
                  width="118.0%"
                  height="118.0%"
                  filterUnits="objectBoundingBox"
                  id="filter-5"
                >
                  <feGaussianBlur
                    stdDeviation="1"
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                  ></feGaussianBlur>
                  <feOffset
                    dx="1"
                    dy="0"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  ></feOffset>
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"
                  ></feComposite>
                  <feColorMatrix
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
                    type="matrix"
                    in="shadowInnerInner1"
                  ></feColorMatrix>
                </filter>
                <circle id="path-6" cx="26.7109632" cy="49.568106" r="9.56810605"></circle>
                <filter
                  x="-7.8%"
                  y="-7.8%"
                  width="115.7%"
                  height="115.7%"
                  filterUnits="objectBoundingBox"
                  id="filter-7"
                >
                  <feMorphology
                    radius="1"
                    operator="erode"
                    in="SourceAlpha"
                    result="shadowSpreadInner1"
                  ></feMorphology>
                  <feGaussianBlur
                    stdDeviation="0.5"
                    in="shadowSpreadInner1"
                    result="shadowBlurInner1"
                  ></feGaussianBlur>
                  <feOffset
                    dx="1"
                    dy="0"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  ></feOffset>
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"
                  ></feComposite>
                  <feColorMatrix
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.382783583 0"
                    type="matrix"
                    in="shadowInnerInner1"
                  ></feColorMatrix>
                </filter>
                <linearGradient
                  x1="34.8558794%"
                  y1="65.3383619%"
                  x2="87.8001057%"
                  y2="11.23037%"
                  id="linearGradient-8"
                >
                  <stop stopColor="#D1104C" offset="0%"></stop>
                  <stop stopColor="#CB4042" offset="40.4401777%"></stop>
                  <stop stopColor="#F15F1D" offset="72.2224267%"></stop>
                  <stop stopColor="#F0A987" offset="100%"></stop>
                </linearGradient>
                <ellipse
                  id="path-9"
                  cx="247.704869"
                  cy="151.125321"
                  rx="157.758139"
                  ry="151.125321"
                ></ellipse>
                <filter
                  x="-10.5%"
                  y="-8.6%"
                  width="119.7%"
                  height="120.5%"
                  filterUnits="objectBoundingBox"
                  id="filter-10"
                >
                  <feMorphology
                    radius="2"
                    operator="dilate"
                    in="SourceAlpha"
                    result="shadowSpreadOuter1"
                  ></feMorphology>
                  <feOffset
                    dx="-2"
                    dy="5"
                    in="shadowSpreadOuter1"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="7.5"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.384717524   0 0 0 0 0.162304103   0 0 0 0 0.329823703  0 0 0 1 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                  ></feColorMatrix>
                </filter>
                <path
                  d="M416.489726,108.111502 C464.632558,120.333809 494.756692,137.790294 494.756692,157.170732 C494.756692,194.134355 385.175388,224.099293 250,224.099293 C114.824612,224.099293 5.24330849,194.134355 5.24330849,157.170732 C5.24330849,139.31827 30.8046485,123.098347 72.4653069,111.098347 C57.5729086,120.137769 49.2578622,130.24168 49.6221958,140.67483 C50.7617706,173.307982 136.383141,196.804674 240.862879,193.156161 C345.342617,189.507648 429.116371,160.095548 427.976797,127.462396 C427.737486,120.609434 423.772528,114.15939 416.689662,108.279043 Z"
                  id="path-11"
                ></path>
                <filter
                  x="-5.7%"
                  y="-23.3%"
                  width="112.7%"
                  height="154.3%"
                  filterUnits="objectBoundingBox"
                  id="filter-12"
                >
                  <feMorphology
                    radius="0.5"
                    operator="dilate"
                    in="SourceAlpha"
                    result="shadowSpreadOuter1"
                  ></feMorphology>
                  <feOffset
                    dx="3"
                    dy="5"
                    in="shadowSpreadOuter1"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="9"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.998847067   0 0 0 0 0.730225444   0 0 0 0 0.517551064  0 0 0 1 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                  ></feColorMatrix>
                </filter>
              </defs>
              <g id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Plants" transform="translate(20.000000, 18.000000)">
                  <g id="Smail-Plant" transform="translate(47.623372, 38.248013)">
                    <g id="Plant">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-2)"
                        xlinkHref="#path-1"
                      ></use>
                      <use fill="#D8D8D8" fillRule="evenodd" xlinkHref="#path-1"></use>
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-3)"
                        xlinkHref="#path-1"
                      ></use>
                    </g>
                    <g id="Oval">
                      <use fill="#D8D8D8" fillRule="evenodd" xlinkHref="#path-4"></use>
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-5)"
                        xlinkHref="#path-4"
                      ></use>
                    </g>
                    <g id="Oval">
                      <use fill="#D8D8D8" fillRule="evenodd" xlinkHref="#path-6"></use>
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-7)"
                        xlinkHref="#path-6"
                      ></use>
                    </g>
                  </g>
                  <g
                    id="Big-Plant"
                    transform="translate(270.563294, 188.373334) rotate(-9.000000) translate(-270.563294, -188.373334) translate(20.563294, 37.248013)"
                  >
                    <g id="Plant">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-10)"
                        xlinkHref="#path-9"
                      ></use>
                      <use
                        fill="url(#linearGradient-8)"
                        fillRule="evenodd"
                        xlinkHref="#path-9"
                      ></use>
                    </g>
                    <g
                      id="Random"
                      transform="translate(250.000000, 166.105317) rotate(-7.000000) translate(-250.000000, -166.105317) "
                    >
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-12)"
                        xlinkHref="#path-11"
                      ></use>
                      <use fill="#FBD689" fillRule="evenodd" xlinkHref="#path-11"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.navList}></div>
      </nav>
      <main className={styles.main}>
        <aside id="side-bar" className={styles.sideBar}></aside>
        <main className={styles.mainContent}>{children}</main>
      </main>
    </>
  );
}

export default Layout;
