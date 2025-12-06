import CustomPagination from "@/components/pages/shared/custom-pagination";
import Merchandise, {
  MerchandiseType,
} from "@/components/pages/shared/merchandise";
import { Separator } from "@/components/ui/separator";

const items: MerchandiseType[] = [
  {
    productId: "1",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "T-shirt with Tape Details",
    noOfStars: 4,
    currentPrice: 120,
  },
  {
    productId: "2",
    imageUrl: "/images/merchandise/image 8 (16).png",
    productName: "Skinny Fit Jeans",
    noOfStars: 3,
    currentPrice: 240,
    discount: 20,
  },
  {
    productId: "3",
    imageUrl: "/images/merchandise/image 9 (7).png",
    productName: "Checkered Shirt",
    noOfStars: 4,
    currentPrice: 180,
  },
  {
    productId: "4",
    imageUrl: "/images/merchandise/image 11.png",
    productName: "Sleeve Striped T-Shirt",
    noOfStars: 4,
    currentPrice: 130,
    discount: 30,
  },
  {
    productId: "5",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "T-shirt with Tape Details",
    noOfStars: 4,
    currentPrice: 120,
  },
  {
    productId: "6",
    imageUrl: "/images/merchandise/image 8 (16).png",
    productName: "Skinny Fit Jeans",
    noOfStars: 3,
    currentPrice: 240,
    discount: 20,
  },
  {
    productId: "7",
    imageUrl: "/images/merchandise/image 9 (7).png",
    productName: "Checkered Shirt",
    noOfStars: 4,
    currentPrice: 180,
  },
  {
    productId: "8",
    imageUrl: "/images/merchandise/image 11.png",
    productName: "Sleeve Striped T-Shirt",
    noOfStars: 4,
    currentPrice: 130,
    discount: 30,
  },
  {
    productId: "9",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "T-shirt with Tape Details",
    noOfStars: 4,
    currentPrice: 120,
  },
];

const ShopPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 flex gap-4">
      {/* Filter Comp */}
      <div className="min-h-screen w-64 bg-[#F8F8F8] hidden md:block"></div>

      {/* Main Comp */}
      <div className="flex-1 min-h-screen">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-center font-black">Casual</h2>
          <p>Showing 1-10 of 100 Products</p>
        </div>

        <div className="py-5 grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 w-full">
          {items.map((item) => (
            <Merchandise
              key={item.productId}
              productId={item.productId}
              imageUrl={item.imageUrl}
              productName={item.productName}
              noOfStars={item.noOfStars}
              currentPrice={item.currentPrice}
              discount={item.discount}
            />
          ))}
        </div>

        <Separator className="my-6" />

        <div className="my-6">
          <CustomPagination />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
