import MainButton from "@/components/ui/MainButton";
import { Dispatch, SetStateAction } from "react";

export default function SelectionInputs({
  filters,
  active,
  setActiveIndex,
}: {
  filters: string[];
  active: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="w-max mx-auto my-10 flex max-w-full flex-wrap gap-3">
      {filters.map((e, i) => {
        return (
          <MainButton
            className={`${
              i === active && "active"
            } text-xs p-2 sm:py-3 sm:px-6 rounded-full sm:text-sm`}
            onClick={() => setActiveIndex(i)}
            key={i}
          >
            {`New ${e}`}
          </MainButton>
        );
      })}
    </div>
  );
}
