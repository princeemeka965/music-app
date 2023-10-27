import { Skeleton } from "@/components/ui/skeleton";

export default function TracksPlaceholder(): React.ReactNode {
  const count = 10;
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(
      <div className="flex items-center space-x-4 my-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[150px]" />
        </div>
      </div>
    );
  }
  return arr;
}
