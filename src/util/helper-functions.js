const toCurrencyString = number => {
  return Number(number).toLocaleString("ja-JP", {
    style: "currency",
    currency: "USD"
  });
};

const createEventSummary = products =>
  products.reduce(
    (acc, product) => {
      const productSummary = {
        countIn: product.variants.reduce(
          (acc, variant) => acc + variant.countIn,
          0
        ),
        add: product.variants.reduce((acc, variant) => acc + variant.add, 0),
        comp: product.variants.reduce((acc, variant) => acc + variant.comp, 0),
        countOut: product.variants.reduce(
          (acc, variant) => acc + variant.countOut,
          0
        ),
        price: product.price
      };
      const totalIn = acc.totalIn + productSummary.countIn + productSummary.add;
      const totalSold =
        acc.totalSold +
        (productSummary.countIn +
          productSummary.add -
          productSummary.comp -
          productSummary.countOut);

      return {
        totalIn: totalIn,
        totalSold: totalSold,
        gross: acc.gross + totalSold * product.price
      };
    },
    {
      totalIn: 0,
      totalSold: 0,
      gross: 0
    }
  );

const entryValid = payload => {
  switch (payload.propertyType) {
    case "price":
      return typeof Number(payload.value) === "number";
      break;
    case "note":
      return typeof payload.value === "string" && payload.value.length <= 140;
      break;
    default:
      return false;
  }
};

module.exports = {
  toCurrencyString,
  createEventSummary,
  entryValid
};
