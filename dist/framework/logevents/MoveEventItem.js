"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveEventItem = void 0;
const LogEventsItem_1 = require("./LogEventsItem");
class MoveEventItem extends LogEventsItem_1.LogEventsItem {
    get from() {
        return this.data.title;
    }
    get to() {
        const { params } = this.data;
        return params.target_title;
    }
}
exports.MoveEventItem = MoveEventItem;
//# sourceMappingURL=MoveEventItem.js.map