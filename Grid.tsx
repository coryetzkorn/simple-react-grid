import { PropsWithChildren } from "react";
import breakpoints from "../helpers/breakpointHelpers";

interface GridProps {
  columnGap?: number;
  rowGap?: number;
}

function Grid({
  children,
  columnGap = 20,
  rowGap = 20,
}: PropsWithChildren<GridProps>) {
  return (
    <>
      <div className="grid">{children}</div>
      <style jsx>{`
        .grid {
          display: grid;
          column-gap: ${columnGap}px;
          row-gap: ${rowGap}px;
        }
        @media (min-width: ${breakpoints.s}px) {
          .grid {
            grid-template-columns: repeat(12, 1fr);
          }
        }
      `}</style>
    </>
  );
}

export default Grid;
