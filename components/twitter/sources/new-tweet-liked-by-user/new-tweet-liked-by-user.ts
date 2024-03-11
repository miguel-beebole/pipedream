import { defineSource } from "@pipedream/types";
import common from "../common/base";
import { getTweetSummary as getItemSummary } from "../common/getItemSummary";
import { getTweetFields } from "../../common/methods";
import { GetUserLikedTweetParams } from "../../common/types/requestParams";
import {
  DOCS_LINK, MAX_RESULTS_PER_PAGE,
} from "../../actions/list-favorites/list-favorites";
import { Tweet } from "../../common/types/responseSchemas";
import cacheUserId from "../common/cacheUserId";
import {
  getObjIncludes, getTweetIncludeIds,
} from "../../common/addObjIncludes";

export default defineSource({
  ...common,
  key: "twitter-new-tweet-liked-by-user",
  name: "New Tweet Liked by User",
  description: `Emit new event when a Tweet is liked by the specified User [See the documentation](${DOCS_LINK})`,
  version: "2.1.0",
  type: "source",
  props: {
    ...common.props,
    userNameOrId: {
      propDefinition: [
        common.props.app,
        "userNameOrId",
      ],
    },
  },
  methods: {
    ...common.methods,
    ...cacheUserId,
    getTweetFields,
    getItemSummary,
    getEntityName() {
      return "Tweet Liked";
    },
    async getResources(maxResults?: number): Promise<Tweet[]> {
      const userId = await this.getCachedUserId();
      const params: GetUserLikedTweetParams = {
        $: this,
        maxPerPage: MAX_RESULTS_PER_PAGE,
        maxResults: maxResults ?? MAX_RESULTS_PER_PAGE,
        params: this.getTweetFields(),
        userId,
      };

      const {
        data, includes,
      } = await this.app.getUserLikedTweets(params);
      data.forEach((tweet) => tweet.includes = getObjIncludes(tweet, includes, getTweetIncludeIds));
      return data;
    },
  },
});
