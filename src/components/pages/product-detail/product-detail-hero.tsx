import React from "react";
import Image from "next/image";
import { HEADER_FONT } from "@/lib/font";
import { Minus, Plus, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const ProductDetailHero = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-[500px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <Image
            src="/images/merchandise/image 1 (7).png"
            alt="Versace"
            width={400}
            height={400}
            className="h-auto w-[100px] rounded-[10px]"
          />

          <Image
            src="/images/merchandise/image 5 (1).png"
            alt="Versace"
            width={400}
            height={400}
            className="h-auto w-[100px] rounded-[10px]"
          />

          <Image
            src="/images/merchandise/image 6.png"
            alt="Versace"
            width={400}
            height={400}
            className="h-auto w-[100px] rounded-[10px]"
          />
        </div>

        <Image
          src="/images/merchandise/image 1 (7).png"
          alt="Versace"
          width={1000}
          height={1000}
          className="h-[400px] w-[400px] rounded-[10px]"
        />
      </div>

      <div>
        <div>
          <h3 className={`${HEADER_FONT.className} text-3xl font-bold`}>
            One Life Graphic TShirt
          </h3>

          <div className="flex items-center justify-start py-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="fill-amber-300 stroke-0 size-4" />
            ))}
          </div>

          <div className="mt-1 flex items-center justify-start gap-2">
            <p className="text-lg font-black">$260</p>

            <p className="text-lg font-black line-through text-muted-foreground">
              $300
            </p>

            <Badge className="bg-destructive/30 text-destructive px-1.5 py-0 text-[10px]">
              -40%
            </Badge>
          </div>

          <p>
            The graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breatable fabric, it offers superior comfort and style
          </p>
        </div>

        <Separator className="my-4" />

        <div>
          <p className="text-muted-foreground text-sm">Select Colors</p>
          <div className="flex items-center justify-start gap-2 py-2">
            <div className="w-[20px] h-[20px] rounded-full bg-[#000]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#fff]"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FF0000]"></div>
          </div>
        </div>

        <Separator className="my-4" />

        <div>
          <p className="text-muted-foreground text-sm">Choose Size</p>

          <div className="py-2 flex items-center justify-start gap-2">
            <Button size="sm" className="text-sm h-7" variant="secondary">
              Small
            </Button>
            <Button size="sm" className="text-sm h-7" variant="secondary">
              Medium
            </Button>
            <Button size="sm" className="text-sm h-7">
              Large
            </Button>
            <Button size="sm" className="text-sm h-7" variant="secondary">
              X-Large
            </Button>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex items-center justify-start gap-2">
          <div className="bg-accent rounded-full flex items-center justify-start gap-2">
            <Button size="icon" variant="ghost">
              <Minus />
            </Button>

            <p>1</p>

            <Button size="icon" variant="ghost">
              <Plus />
            </Button>
          </div>

          <Button className="flex-1">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHero;
