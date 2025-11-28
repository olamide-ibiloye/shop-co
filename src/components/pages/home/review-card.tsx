import { Check, Star } from "lucide-react";

const ReviewCard = ({ showDate }: { showDate?: boolean }) => {
  return (
    <div className="min-w-[350px] min-h-[150px] p-4 border border-text-muted-foreground rounded-[10px] space-y-2">
      <div className="flex items-center justify-start">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="fill-amber-300 stroke-0 size-4" />
        ))}
      </div>

      <div className="flex items-center gap-2 justify-start">
        <h4 className="font-bold ">Customer Name</h4>
        <Check className="size-4 bg-green-500 p-0.5 rounded-full stroke-white" />
      </div>

      <p className="text-muted-foreground text-sm">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </p>

      {showDate && (
        <p className="text-muted-foreground text-sm mt-5">
          Posted on August 18, 2023
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
