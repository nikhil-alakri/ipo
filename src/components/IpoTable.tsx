import Image from "next/image";
import Link from "next/link";

const IpoTable = ({ tableData }: any) => (
  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            {tableData.columns.map((item: any) => (
              <th
                key={item.id}
                className="px-5 first:text-left text-center py-4 bg-gray-100  text-xs font-normal text-gray-500 uppercase tracking-wider"
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows?.map((item: any) => (
            <tr key={item.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                <div className="flex">
                  <div
                    className="relative border border-gray-300 p-2 rounded-[50%] inline-block overflow-hidden"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Image
                      src={
                        item.logoUrl
                          ? item.logoUrl
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
                    <Link
                      href={`details/${item.searchId}`}
                      className="text-gray-900 whitespace-no-wrap font-semibold"
                    >
                      {item.growwShortName}
                    </Link>
                    <p className="text-gray-400 whitespace-no-wrap">
                      {item.additionalTxt}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">
                  ₹3600 Crores *
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">
                  {item.minPrice
                    ? `₹${item.minPrice} - ₹${item.maxPrice}`
                    : "₹50 - ₹60 *"}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <span className="text-gray-900 whitespace-no-wrap ml-3">
                  <p className="text-gray-900 whitespace-no-wrap font-semibold">
                    ₹50,000 *
                  </p>
                  <p className="text-gray-400 whitespace-no-wrap">
                    100 Shares/ 5 Lots *
                  </p>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
export default IpoTable;
