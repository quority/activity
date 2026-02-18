"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventItem = void 0;
const LogEventsItem_1 = require("./LogEventsItem");
class DeleteEventItem extends LogEventsItem_1.LogEventsItem {
    isDeleting() {
        return this.data.action === 'delete';
    }
    isRestoring() {
        return this.data.action === 'restore';
    }
}
exports.DeleteEventItem = DeleteEventItem;
//# sourceMappingURL=DeleteEventItem.js.map