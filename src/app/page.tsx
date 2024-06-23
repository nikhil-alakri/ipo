import IpoTable from "@/components/IpoTable";
import { filterResponse } from "@/utils";

async function getData() {
  const BASE_URL = process.env.GROWW_API_URL;

  const growwRes = await fetch(
    `${BASE_URL}/v1/api/stocks_primary_market_data/v2/ipo/all`,
    { cache: "no-store" }
  );

  if (!growwRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const growwData = await growwRes.json();

  const filteredResponse = filterResponse(growwData);

  return filteredResponse;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <div className="container mx-auto p-4 lg:px-8">
        <h1 className="text-lg">Current IPOs</h1>
        <IpoTable
          tableData={{
            columns: [
              { id: 1, title: "Company / Issue Date" },
              { id: 2, title: "Issue size" },
              { id: 3, title: "Price Range" },
              { id: 4, title: "Min invest / qty" },
            ],
            rows: data.currentData,
          }}
        />
        <h1 className="text-lg">Upcoming IPOs</h1>
        <IpoTable
          tableData={{
            columns: [
              { id: 1, title: "Company / Issue Date" },
              { id: 2, title: "Issue size" },
              { id: 3, title: "Price Range" },
              { id: 4, title: "Min invest / qty" },
            ],
            rows: data.upcomingData,
          }}
        />
        <h1 className="text-lg">Past IPOs</h1>
        <IpoTable
          tableData={{
            columns: [
              { id: 1, title: "Company / Issue Date" },
              { id: 2, title: "Issue size" },
              { id: 3, title: "Price Range" },
              { id: 4, title: "Min invest / qty" },
            ],
            rows: data.pastData,
          }}
        />
        <span className="text-xs">
          Note: Issue size, Price Range, Min invest/qty data are dummy
        </span>
      </div>
    </main>
  );
}
