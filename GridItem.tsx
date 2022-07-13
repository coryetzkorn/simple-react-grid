import { PropsWithChildren } from "react";

interface GridItemProps {
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function GridItem({ children, span }: PropsWithChildren<GridItemProps>) {
  return (
    <>
      <div className="grid-item">{children}</div>
      <style jsx>{`
        .grid-item {
          grid-column: auto / span ${span};
        }
      `}</style>
    </>
  );
}

export default GridItem;
