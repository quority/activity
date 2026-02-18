"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockEventItem = void 0;
const LogEventsItem_1 = require("./LogEventsItem");
class BlockEventItem extends LogEventsItem_1.LogEventsItem {
    get expiryDate() {
        if (this.isBlocking() || this.isReblocking()) {
            const { params } = this.data;
            if (params) {
                return new Date(params.expiry);
            }
        }
        return null;
    }
    isBlocking() {
        return this.data.action === 'block';
    }
    isReblocking() {
        return this.data.action === 'reblock';
    }
    isUnblocking() {
        return this.data.action === 'unblock';
    }
}
exports.BlockEventItem = BlockEventItem;
//# sourceMappingURL=BlockEventItem.js.map