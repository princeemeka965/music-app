import { ChevronLeft } from "@/icons";

export default function Headers(): React.ReactNode {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="flex p-3 flex-col justify-center bg-skinDarkCloud rounded-xl">
          <ChevronLeft style={{ marginLeft: -1 }} />
        </div>
        <div className="flex mx-3 flex-col justify-center p-3">
          <span className="text-sm text-whiteFade">Home</span>
        </div>
      </div>
    </div>
  );
}
