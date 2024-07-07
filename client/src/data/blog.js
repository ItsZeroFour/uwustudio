import IncreasedConversionImage from "../../public/images/blog/increased-conversion/main-image.jpg";
import promotionBusinessImage from "../../public/images/blog/small-business-movement/main-image.jpg";
import brandMainImage from "../../public/images/blog/unique-brand/main-image.jpg";

export const getLastBlogItems = (t) => [
  {
    title: t("blog1Title"),
    text: t("blog1Text"),
    date: "12.05.2024",
    imagePath: brandMainImage,
    link: "increased-conversion",
  },
  {
    title: t("blog2Title"),
    text: t("blog2Text"),
    date: "17.04.2024",
    imagePath: promotionBusinessImage,
    link: "small-business-movement",
  },
  {
    title: t("blog3Title"),
    text: t("blog3Text"),
    date: "11.04.2024",
    imagePath: IncreasedConversionImage,
    link: "unique-brand",
  },
];
