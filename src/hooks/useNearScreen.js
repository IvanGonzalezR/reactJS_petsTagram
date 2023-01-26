import React from "react";

function useNearScreen() {
  const ref = React.useRef(null);
  const [ show, setShow ] = React.useState(false);

  React.useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const { isIntersecting } = entries[ 0 ];
            if (isIntersecting) {
              setShow(true);
              observer.disconnect();
            };
          }
        );
        observer.observe(ref.current);
      });
  }, [ ref ]);

  return [ show, ref ];
};

export { useNearScreen };
