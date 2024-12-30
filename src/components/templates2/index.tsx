const Templates2 = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className="h-1/2 w-[500px] relative bg-black overflow-hidden"
        style={{
          // transform: `rotateX(0deg) rotateY(20deg) rotateZ(0deg)`,
          transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`,
          // perspective: 4000,
        }}
      >
        <div className="book-cover-left"></div>
        {new Array(4).fill(0).map((_, index) => (
          <div
            className="fixed left-0 right-0 top-0 bottom-0 flex"
            key={index}
            style={{
              transform: `translate3d(${4 * index}px, 0px, ${20 * index}px)`,
              transformStyle: 'preserve-3d',
              padding: '20px 10px 10px',
              width: `calc(100% - ${4 * index}px)`,
              // display: 'none',
              // width: `calc(100% - 200px - ${10 * index}px)`,
              // width: '50%',
              // width: '50%',
            }}
          >
            <div
              className="flex-1"
              style={{
                borderTopLeftRadius: '1%',
                borderBottomLeftRadius: '1%',
                backgroundColor: '#fff',
                boxShadow:
                  'inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgba(34, 27, 20, .81)',
              }}
            ></div>
          </div>
        ))}
        <div
          className="fixed left-0 right-0 top-0 bottom-0 flex"
          style={{
            transform: `translate3d(16px, 0px, 80px)`,
            transformStyle: 'preserve-3d',
            padding: '20px 10px 10px',
            width: `calc(100% - ${4 * 4}px)`,
          }}
        >
          <div
            className="flex-1 p-4"
            style={{
              borderTopLeftRadius: '1%',
              borderBottomLeftRadius: '1%',
              backgroundColor: '#fff',
              boxShadow:
                'inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgba(34, 27, 20, .81)',
            }}
          >
            {/* <div
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 700 700' width='700' height='700' opacity='1'%3e%3ctitle%3enoise%3c/title%3e%3cdefs%3e%3cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'/%3e%3cfeSpecularLighting surfaceScale='5' specularConstant='0.8' specularExponent='20' lighting-color='white' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3e%3cfeDistantLight azimuth='3' elevation='96'/%3e%3c/feSpecularLighting%3e%3cfeColorMatrix type='saturate' values='0' x='0%25' y='0%25' width='100%25' height='100%25' in='specularLighting' result='colormatrix'/%3e%3c/filter%3e%3c/defs%3e%3crect width='700' height='700' fill='black'/%3e%3crect width='700' height='700' fill='white' filter='url(%23nnnoise-filter)'/%3e%3c/svg%3e")`,
                backgroundSize: '400px',
                opacity: 0.05,
              }}
              className="select-none repeat-infinite invert dark:invert-0 z-[9999] fixed inset-0 pointer-events-none"
            ></div> */}

            {/* https://css-tricks.com/css-dappled-light-effect/ */}
            <div
              style={{
                color: 'transparent',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                textShadow: '0 0 40px floralwhite',
                mixBlendMode: 'multiply',
                font: 'bolder 1320pt / 1320pt monospace',
                marginTop: '-200px',
                marginLeft: '-100px',
                userSelect: 'none',
              }}
              className="select-none z-[9999] fixed inset-0 pointer-events-none"
            >
              \
            </div>

            <div
              className="text-xs pt-10 pl-6"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform',
                transformStyle: 'flat',
              }}
            >
              <h3>
                <strong>莫等闲</strong>
              </h3>
              <p>白了少年头、空悲切。</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="center"></div> */}

      {/* <div
        className="h-1/2 w-full relative bg-black overflow-hidden"
        style={{
          // transform: `rotateX(0deg) rotateY(20deg) rotateZ(0deg)`,
          transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`,
          perspective: 4000,
        }}
      >
        <div className="book-cover-left"></div>
        {new Array(4).fill(0).map((_, index) => (
          <div
            className="fixed left-0 right-0 top-0 bottom-0 flex"
            key={index}
            style={{
              transform: `translate3d(${-4 * index}px, 0px, ${20 * index}px)`,
              transformStyle: 'preserve-3d',
              margin: '20px 10px 10px',
              // width: `calc(100% - 200px - ${10 * index}px)`,
              // width: '50%',
              // width: '50%',
            }}
          >
            <div
              className="flex-1"
              style={{
                borderTopLeftRadius: '1%',
                borderBottomLeftRadius: '1%',
                backgroundColor: '#fff',
                boxShadow:
                  'inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgba(34, 27, 20, .81)',
              }}
            ></div>
          </div>
        ))}
        <div
          className="fixed left-0 right-0 top-0 bottom-0 flex"
          style={{
            margin: '20px 10px 18px',
            transform: `translate3d(16px, 0px, 60px)`,
            // transformStyle: 'preserve-3d',
          }}
        >
          <div className="page-left-2">
            <div className="corner"></div>
            <div className="corner2"></div>
            <div className="corner-fold"></div>
            <div className="page-text w-richtext">
              <h3>
                <strong>America</strong>
              </h3>
              <h6>
                BY
                <a
                  href="https://www.poetryfoundation.org/poets/walt-whitman"
                  target="_blank"
                >
                  WALT WHITMAN
                </a>
              </h6>
              <p>‍</p>
              <p>Centre of equal daughters, equal sons,</p>
              <p>All, all alike endear’d, grown, ungrown, young or old,</p>
              <p>Strong, ample, fair, enduring, capable, rich,</p>
              <p>Perennial with the Earth, with Freedom, Law and Love,</p>
              <p>A grand, sane, towering, seated Mother,</p>
              <p>Chair’d in the adamant of Time.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="right-side">
        <div className="book-cover-right"></div>
        <div className="layer1">
          <div className="page-right"></div>
        </div>
        <div className="layer2 right">
          <div className="page-right"></div>
        </div>
        <div className="layer3 right">
          <div className="page-right"></div>
        </div>
        <div className="layer4 right">
          <div className="page-right"></div>
        </div>
        <div className="layer-text right">
          <div className="page-right-2">
            <div className="page-text w-richtext">
              <h3>
                <strong>A Glimpse</strong>
              </h3>
              <h6>
                BY 
                <a
                  href="https://www.poetryfoundation.org/poets/walt-whitman"
                  target="_blank"
                >
                  WALT WHITMAN
                </a>
              </h6>
              <p>‍</p>
              <p>A glimpse through an interstice caught, </p>
              <p>
                Of a crowd of workmen and drivers in a bar-room around the stove
                late of a winter night, and I unremark’d seated in a corner, 
              </p>
              <p>‍</p>
              <p>
                Of a youth who loves me and whom I love, silently approaching
                and seating himself near, that he may hold me by the hand, 
              </p>
              <p>‍</p>
              <p>
                A long while amid the noises of coming and going, of drinking
                and oath and smutty jest, 
              </p>
              <p>‍</p>
              <p>
                There we two, content, happy in being together, speaking little,
                perhaps not a word. 
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Templates2
