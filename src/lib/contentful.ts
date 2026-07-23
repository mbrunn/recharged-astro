import contentful from "contentful";

const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
const previewToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN;
const deliveryToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;
const usePreview = import.meta.env.DEV;

export const hasContentfulConfig = Boolean(
  spaceId && (usePreview ? previewToken : deliveryToken)
);

export const contentfulClient = hasContentfulConfig
  ? contentful.createClient({
      space: spaceId,
      accessToken: usePreview ? previewToken : deliveryToken,
      host: usePreview ? "preview.contentful.com" : "cdn.contentful.com",
    })
  : null;
