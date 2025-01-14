import { fullProduct } from "@/app/interface";
import { client } from "../../lib/sanity";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";

const getData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id, 
    price,
    price_id,
    name,
    description,
    images,
    "slug": slug.current,
    "categoryName": category->name  
}`;
  const data = await client.fetch(query);
  return data;
};

export const dynamic = "force-dynamic";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="gap-x-2 rounded-full">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500">56 Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="h-6 w-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency={"USD"}
                name={data.name}
                price_id={data.price_id}
                price={data.price}
                description={data.description}
                image={data.images[0]}
              />
              <CheckoutNow
                currency={"USD"}
                name={data.name}
                price_id={data.price_id}
                price={data.price}
                description={data.description}
                image={data.images[0]}
              />
            </div>

            <p className="mt-12 text-base tracking-wide text-gray-500">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
