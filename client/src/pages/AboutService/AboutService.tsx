"use client";

import React, { useEffect, useState } from "react";
import exploreImage from "../../../public/icons/about/stages-1.png";
import analyzImage from "../../../public/icons/about/stages-2.png";
import designImage from "../../../public/icons/about/stages-3.png";
import developImage from "../../../public/icons/about/stages-4.png";
import testingImage from "../../../public/icons/about/testing.png";
import startImage from "../../../public/icons/about/stages-5.png";
import AboutServicePage from "@/widgets/AboutService/AboutService";
import { useTranslation } from "react-i18next";

interface StageItem {
  image: any;
  title: string;
  text: string;
}

interface ServiceData {
  forPage: string;
  title: string;
  text: string;
  categoryes: string[];
  types: string[];
  stages: {
    title: string;
    text: string;
    list: StageItem[];
  };
}

const AboutService: React.FC<{ pathName: string }> = ({ pathName }) => {
  const { t } = useTranslation();

  const [data, setData] = useState<ServiceData | null>(null);
  const serviceData: ServiceData[] = [
    {
      forPage: "develop-website",
      title: t("aboutServiceDevelopTitle"),
      text: t("aboutServiceDevelopDesc"),
      categoryes: [
        t("aboutServiceDevelopCategorys1"),
        t("aboutServiceDevelopCategorys2"),
        t("aboutServiceDevelopCategorys3"),
      ],
      types: [
        t("aboutServiceDevelopTypes1"),
        t("aboutServiceDevelopTypes2"),
        t("aboutServiceDevelopTypes3"),
        t("aboutServiceDevelopTypes4"),
        t("aboutServiceDevelopTypes5"),
        t("aboutServiceDevelopTypes6"),
      ],
      stages: {
        title: t("aboutServiceDevelopStagesTitle"),
        text: t("aboutServiceDevelopStagesDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceDevelopListItem1Title"),
            text: t("aboutServiceDevelopListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceDevelopListItem2Title"),
            text: t("aboutServiceDevelopListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceDevelopListItem3Title"),
            text: t("aboutServiceDevelopListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceDevelopListItem4Title"),
            text: t("aboutServiceDevelopListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceDevelopListItem5Title"),
            text: t("aboutServiceDevelopListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceDevelopListItem6Title"),
            text: t("aboutServiceDevelopListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "design",
      title: t("aboutServiceDesignTitle"),
      text: t("aboutServiceDesignDesc"),
      categoryes: [
        t("aboutServiceDesignCategoryes1"),
        t("aboutServiceDesignCategoryes2"),
        t("aboutServiceDesignCategoryes3"),
      ],
      types: [
        t("aboutServiceDesignTypes1"),
        t("aboutServiceDesignTypes2"),
        t("aboutServiceDesignTypes3"),
        t("aboutServiceDesignTypes4"),
        t("aboutServiceDesignTypes5"),
        t("aboutServiceDesignTypes6"),
      ],
      stages: {
        title: t("aboutServiceDesignListTitle"),
        text: t("aboutServiceDesignListDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceDesignListItem1Title"),
            text: t("aboutServiceDesignListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceDesignListItem2Title"),
            text: t("aboutServiceDesignListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceDesignListItem3Title"),
            text: t("aboutServiceDesignListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceDesignListItem4Title"),
            text: t("aboutServiceDesignListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceDesignListItem5Title"),
            text: t("aboutServiceDesignListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceDesignListItem6Title"),
            text: t("aboutServiceDesignListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "seo",
      title: t("aboutServiceSEOTitle"),
      text: t("aboutServiceSEODesc"),
      categoryes: [
        t("aboutServiceSEOCategoryes1"),
        t("aboutServiceSEOCategoryes2"),
        t("aboutServiceSEOCategoryes3"),
      ],
      types: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"],
      stages: {
        title: t("aboutServiceSEOListTitle"),
        text: t("aboutServiceSEOListDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceSEOListItem1Title"),
            text: t("aboutServiceSEOListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceSEOListItem2Title"),
            text: t("aboutServiceSEOListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceSEOListItem3Title"),
            text: t("aboutServiceSEOListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceSEOListItem4Title"),
            text: t("aboutServiceSEOListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceSEOListItem5Title"),
            text: t("aboutServiceSEOListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceSEOListItem6Title"),
            text: t("aboutServiceSEOListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "marketing",
      title: t("aboutServiceMarketingTitle"),
      text: t("aboutServiceMarketingDesc"),
      categoryes: [
        t("aboutServiceMarketingCategoryes1"),
        t("aboutServiceMarketingCategoryes2"),
        t("aboutServiceMarketingCategoryes3"),
      ],
      types: [
        t("aboutServiceMarketingTypes1"),
        t("aboutServiceMarketingTypes2"),
        t("aboutServiceMarketingTypes3"),
        t("aboutServiceMarketingTypes4"),
        t("aboutServiceMarketingTypes5"),
        t("aboutServiceMarketingTypes6"),
      ],
      stages: {
        title: t("aboutServiceMarketingStagesTitle"),
        text: t("aboutServiceMarketingStagesDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceMarketingListItem1Title"),
            text: t("aboutServiceMarketingListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceMarketingListItem2Title"),
            text: t("aboutServiceMarketingListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceMarketingListItem3Title"),
            text: t("aboutServiceMarketingListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceMarketingListItem4Title"),
            text: t("aboutServiceMarketingListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceMarketingListItem5Title"),
            text: t("aboutServiceMarketingListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceMarketingListItem6Title"),
            text: t("aboutServiceMarketingListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "socials",
      title: t("aboutServiceSocialsTitle"),
      text: t("aboutServiceSocialsDesc"),
      categoryes: [
        t("aboutServiceSocialsCategory1"),
        t("aboutServiceSocialsCategory2"),
        t("aboutServiceSocialsCategory3"),
      ],
      types: [
        "Telegram",
        "Youtube",
        "Instagram",
        "VKontakte",
        "X(Twitter)",
        "TikTok",
      ],
      stages: {
        title: t("aboutServiceSocialsStagesTitle"),
        text: t("aboutServiceSocialsStagesDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceSocialsListItem1Title"),
            text: t("aboutServiceSocialsListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceSocialsListItem2Title"),
            text: t("aboutServiceSocialsListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceSocialsListItem3Title"),
            text: t("aboutServiceSocialsListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceSocialsListItem4Title"),
            text: t("aboutServiceSocialsListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceSocialsListItem5Title"),
            text: t("aboutServiceSocialsListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceSocialsListItem6Title"),
            text: t("aboutServiceSocialsListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "revision",
      title: t("aboutServiceRevisionTitle"),
      text: t("aboutServiceRevisionDesc"),
      categoryes: [
        t("aboutServiceRevisionCategory1"),
        t("aboutServiceRevisionCategory2"),
        t("aboutServiceRevisionCategory3"),
      ],
      types: [
        t("aboutServiceRevisionType1"),
        t("aboutServiceRevisionType2"),
        t("aboutServiceRevisionType3"),
        t("aboutServiceRevisionType4"),
        t("aboutServiceRevisionType5"),
        t("aboutServiceRevisionType6"),
      ],
      stages: {
        title: t("aboutServiceRevisionStagesTitle"),
        text: t("aboutServiceRevisionStagesDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceRevisionListItem1Title"),
            text: t("aboutServiceRevisionListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceRevisionListItem2Title"),
            text: t("aboutServiceRevisionListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceRevisionListItem3Title"),
            text: t("aboutServiceRevisionListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceRevisionListItem4Title"),
            text: t("aboutServiceRevisionListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceRevisionListItem5Title"),
            text: t("aboutServiceRevisionListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceRevisionListItem6Title"),
            text: t("aboutServiceRevisionListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "presentation",
      title: t("aboutServicePresentationTitle"),
      text: t("aboutServicePresentationDesc"),
      categoryes: [
        t("aboutServicePresentationCategory1"),
        t("aboutServicePresentationCategory2"),
        t("aboutServicePresentationCategory3"),
      ],
      types: [
        t("aboutServicePresentationType1"),
        t("aboutServicePresentationType2"),
        t("aboutServicePresentationType3"),
        t("aboutServicePresentationType4"),
        t("aboutServicePresentationType5"),
        t("aboutServicePresentationType6"),
      ],
      stages: {
        title: t("aboutServicePresentationStagesTitle"),
        text: t("aboutServicePresentationStagesDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServicePresentationListItem1Title"),
            text: t("aboutServicePresentationListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServicePresentationListItem2Title"),
            text: t("aboutServicePresentationListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServicePresentationListItem3Title"),
            text: t("aboutServicePresentationListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServicePresentationListItem4Title"),
            text: t("aboutServicePresentationListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServicePresentationListItem5Title"),
            text: t("aboutServicePresentationListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServicePresentationListItem6Title"),
            text: t("aboutServicePresentationListItem6Desc"),
          },
        ],
      },
    },

    {
      forPage: "analysis",
      title: t("aboutServiceAnalysisTitle"),
      text: t("aboutServiceAnalysisDesc"),
      categoryes: [
        t("aboutServiceAnalysisCategory1"),
        t("aboutServiceAnalysisCategory2"),
        t("aboutServiceAnalysisCategory3"),
      ],
      types: [
        t("aboutServiceAnalysisType1"),
        t("aboutServiceAnalysisType2"),
        t("aboutServiceAnalysisType3"),
        t("aboutServiceAnalysisType4"),
        t("aboutServiceAnalysisType5"),
      ],
      stages: {
        title: t("aboutServiceAnalysisStagesTitle"),
        text: t("aboutServiceAnalysisStagesDesc"),
        list: [
          {
            image: exploreImage,
            title: t("aboutServiceAnalysisListItem1Title"),
            text: t("aboutServiceAnalysisListItem1Desc"),
          },

          {
            image: analyzImage,
            title: t("aboutServiceAnalysisListItem2Title"),
            text: t("aboutServiceAnalysisListItem2Desc"),
          },

          {
            image: designImage,
            title: t("aboutServiceAnalysisListItem3Title"),
            text: t("aboutServiceAnalysisListItem3Desc"),
          },

          {
            image: developImage,
            title: t("aboutServiceAnalysisListItem4Title"),
            text: t("aboutServiceAnalysisListItem4Desc"),
          },

          {
            image: testingImage,
            title: t("aboutServiceAnalysisListItem5Title"),
            text: t("aboutServiceAnalysisListItem5Desc"),
          },

          {
            image: startImage,
            title: t("aboutServiceAnalysisListItem6Title"),
            text: t("aboutServiceAnalysisListItem6Desc"),
          },
        ],
      },
    },
  ];

  useEffect(() => {
    const matchingData = serviceData.find((item) => item.forPage === pathName);
    if (matchingData) {
      setData(matchingData);
    }
  }, [pathName]);

  return data ? <AboutServicePage data={data} /> : null;
};

export default AboutService;
