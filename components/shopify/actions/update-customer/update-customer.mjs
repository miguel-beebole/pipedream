import shopify from "../../shopify.app.mjs";
import metafieldActions from "../common/metafield-actions.mjs";
import common from "./common.mjs";

export default {
  ...metafieldActions,
  ...common,
  key: "shopify-update-customer",
  name: "Update Customer",
  description: "Update a existing customer. [See the docs](https://shopify.dev/api/admin-rest/2022-01/resources/customer#[put]/admin/api/2022-01/customers/{customer_id}.json)",
  version: "0.0.12",
  type: "action",
  props: {
    shopify,
    customerId: {
      propDefinition: [
        shopify,
        "customerId",
      ],
    },
    firstName: {
      propDefinition: [
        shopify,
        "firstName",
      ],
    },
    lastName: {
      propDefinition: [
        shopify,
        "lastName",
      ],
    },
    email: {
      propDefinition: [
        shopify,
        "email",
      ],
      optional: true,
    },
    phone: {
      propDefinition: [
        shopify,
        "phone",
      ],
    },
    address: {
      propDefinition: [
        shopify,
        "address",
      ],
    },
    company: {
      propDefinition: [
        shopify,
        "company",
      ],
    },
    city: {
      propDefinition: [
        shopify,
        "city",
      ],
    },
    province: {
      propDefinition: [
        shopify,
        "province",
      ],
    },
    country: {
      propDefinition: [
        shopify,
        "country",
      ],
    },
    zip: {
      propDefinition: [
        shopify,
        "zip",
      ],
    },
    metafields: {
      propDefinition: [
        shopify,
        "metafields",
      ],
    },
  },
};
