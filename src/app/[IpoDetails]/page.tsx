import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { formatDate } from "@/utils";
import { TIMELINE } from "@/data";

export async function IpoDetailData(slug: string) {
  const BASE_URL = process.env.GROWW_API_URL;

  const growwRes = await fetch(
    `${BASE_URL}/v1/api/stocks_primary_market_data/v1/ipo/company/${slug}?isHniEnabled=true`,
    { cache: "no-store" }
  );

  if (!growwRes.ok) {
    throw new Error("Failed to fetch data");
  }

  return await growwRes.json();
}

export default async function IpoDetail({
  params,
}: {
  params: { IpoDetails: string };
}) {
  const ipoDetails = await IpoDetailData(params.IpoDetails);

  let INR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <main>
      <div className="container mx-auto p-4 lg:p-8">
        {/* breadcrumb */}
        <nav className="text-sm font-normal text-zinc-400 max-sm:hidden">
          <Link href="/">Home</Link> &nbsp; / &nbsp; {ipoDetails.companyName}
        </nav>

        {/* IPO Details header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-y-4">
          <div className="flex items-start lg:items-center">
            <Link href="/" className="border-slate-200 border rounded-xl p-2">
              <Image src="/images/back.png" alt="Back" width={24} height={24} />
            </Link>

            <div className="flex ml-4">
              <div
                className="relative border border-gray-300 p-2 rounded-[50%] inline-block overflow-hidden"
                style={{ width: "50px", height: "50px" }}
              >
                <Image
                  src={
                    ipoDetails.logoUrl
                      ? ipoDetails.logoUrl
                      : `https://picsum.photos/id/${
                          Math.floor(Math.random() * 346) + 1
                        }/200/200?blur=1`
                  }
                  alt="LOGO"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-3">
                <span
                  // href={`/${ipoDetails.searchId}`}
                  className="text-gray-900 whitespace-no-wrap font-medium lg:font-semibold"
                >
                  {ipoDetails.growwShortName}
                </span>
                <p className="text-gray-400 whitespace-no-wrap text-sm lg:text-lg">
                  {ipoDetails.companyName}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            {ipoDetails.documentUrl.includes(".html") ? (
              <a
                href={ipoDetails.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="border-slate-200 border rounded-xl p-1 lg:p-2"
              >
                <Image
                  src="/images/external-link.png"
                  alt="Website"
                  width={24}
                  height={24}
                />
              </a>
            ) : (
              <a
                href={ipoDetails.documentUrl}
                download
                className="border-slate-200 border rounded-xl p-1 lg:p-2"
              >
                <Image
                  src="/images/download.png"
                  alt="Website"
                  width={24}
                  height={24}
                />
              </a>
            )}
            <button className="bg-indigo-950 text-white px-7 py-2 lg:py-4 ml-3 rounded-xl">
              Apply now
            </button>
          </div>
        </div>
        {/* IPO Details */}
        <div className="border-slate-200 border rounded-2xl px-6 py-4 my-4">
          <h3 className="py-4 text-lg font-medium">IPO Details</h3>
          <div className="border-slate-200 border rounded-2xl p-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Issue Size</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                {INR.format(ipoDetails.issueSize)} Crores
              </p>
            </div>

            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Price range</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                ₹{ipoDetails.minPrice} - ₹{ipoDetails.maxPrice}
              </p>
            </div>

            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Minimum amount</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                {INR.format(ipoDetails.minPrice * ipoDetails.lotSize)}
              </p>
            </div>

            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Lot size</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                {ipoDetails.lotSize}
              </p>
            </div>
            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Issue dates</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                {formatDate(ipoDetails.startDate)} to
                {formatDate(ipoDetails.endDate)}
              </p>
            </div>
            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Listed on</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                {formatDate(ipoDetails.listingDate)}
              </p>
            </div>
            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Listed price</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                ₹{ipoDetails.listing.listingPrice}
              </p>
            </div>
            <div className="flex flex-col	">
              <p className="text-gray-500 lg:text-lg">Listing gains</p>
              <p className="text-gray-900 subpixel-antialiased font-semibold lg:text-xl">
                ₹10 (<span className="text-red-400">10.0%</span>)
              </p>
            </div>
          </div>
        </div>
        {/* IPO timeline */}
        <div className="border-slate-200 border rounded-2xl px-8 py-4 my-4 h-72">
          <h3 className="py-4 text-lg font-medium">IPO timeline</h3>
          <div className="p-4 pb-12 ">
            <div className="flex items-center flex-col sm:flex-col md:flex-row">
              {TIMELINE.map((item, index) => (
                <Fragment key={item.title}>
                  <div className="flex items-center text-green-600 relative">
                    <div className="rounded-full h-12 w-12 py-3 border-2 bg-green-600 border-green-600 flex justify-center">
                      <Image
                        src="/images/check.png"
                        alt="tick"
                        className="invert"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="absolute sm:top-10 lg:top-0 sm:left-12 lg:left-0 sm:ml-12 lg:-ml-10 text-center mt-16 w-32 text-lg font-semibold text-gray-900">
                      {item.title}
                      <p className="text-gray-500 font-normal subpixel-antialiased">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  {TIMELINE.length > index + 1 && (
                    <div className="flex-auto border-t-2 border-green-600"></div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* About IPO company */}
        <div className="border-slate-200 border rounded-2xl px-6 py-4 my-4">
          <h3 className="py-4 text-lg font-medium">About Company</h3>
          <p className="text-sm text-slate-600">
            {ipoDetails.aboutCompany.aboutCompany}
          </p>
        </div>
      </div>
    </main>
  );
}
