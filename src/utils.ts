import { NSE_CURRENT_DATA, NSE_UPOMING_DATA, NSE_PAST_DATA } from "./data";

const mergeData = (groww: any, nse: any) => {
  let mergedData: any = [];

  groww.forEach((growwItem: any) => {
    const nseItem = nse.find(
      (nseItem: any) => nseItem.symbol === growwItem.symbol
    );

    if (nseItem) {
      const mergedObject = {
        ...growwItem,
        nse_data: nseItem,
      };

      mergedData.push(mergedObject);
    } else {
      mergedData.push(growwItem);
    }
  });

  return mergedData;
};

export const filterResponse = (response: any) => {
  const groww = response.ipoCompanyListingOrderMap;

  const currentData = mergeData(groww.ACTIVE, NSE_CURRENT_DATA);
  const upcomingData = mergeData(groww.UPCOMING, NSE_UPOMING_DATA);
  const pastData = mergeData(groww.CLOSED, NSE_PAST_DATA);

  return {
    currentData,
    pastData,
    upcomingData,
  };
};

export const formatDate = (dateVal: any) => {
  const date: any = new Date(dateVal);
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  return formattedDate;
};
