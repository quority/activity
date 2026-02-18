"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocialActivity = void 0;
const fandom_1 = require("@quority/fandom");
const hasDiscussions = async (wiki) => {
    const url = new URL('./wikia.php', wiki.api);
    url.searchParams.set('controller', 'DiscussionPost');
    url.searchParams.set('method', 'getPosts');
    const { statusCode } = await wiki.request.raw(url, { method: 'HEAD' });
    return statusCode === 200;
};
const getSocialActivity = async (wiki, from, to) => {
    if (!(wiki.platform instanceof fandom_1.Fandom))
        return [];
    const discussions = await hasDiscussions(wiki);
    if (!discussions)
        return [];
    const fandom = wiki;
    const controller = fandom.custom.wikia.DiscussionPostController;
    const result = await controller.getPosts();
    const fromMs = from.getTime();
    const toMs = to.getTime();
    const posts = result._embedded['doc:posts'].filter(post => {
        const created = post.creationDate.epochSecond * 1000;
        return created >= fromMs && created <= toMs;
    });
    const pageIds = posts.filter(i => i._embedded.thread?.[0].containerType === fandom_1.DiscussionsAPI.ContainerTypes.ArticleComment)
        .map(i => i._embedded.thread?.[0].containerId)
        .filter(Boolean);
    const articleNames = await fandom.custom.wikia.FeedsAndPostsController.getArticleNamesAndUsernames(pageIds);
    const titles = Object.entries(articleNames.articleNames).reduce((list, [pageId, item]) => {
        list[pageId] = item.title;
        return list;
    }, {});
    return posts.map(post => {
        if (post._embedded.thread?.[0].containerType === fandom_1.DiscussionsAPI.ContainerTypes.ArticleComment) {
            const id = post._embedded.thread[0].containerId;
            post._embedded.thread[0].containerId = titles[id] ?? id;
        }
        return post;
    });
};
exports.getSocialActivity = getSocialActivity;
//# sourceMappingURL=get-social-activity.js.map