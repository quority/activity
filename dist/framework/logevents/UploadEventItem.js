"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadEventItem = void 0;
const LogEventsItem_1 = require("./LogEventsItem");
class UploadEventItem extends LogEventsItem_1.LogEventsItem {
    isUploading() {
        return this.data.action === 'upload';
    }
    isOverwriting() {
        return this.data.action === 'overwrite';
    }
    isReverting() {
        return this.data.action === 'revert';
    }
}
exports.UploadEventItem = UploadEventItem;
//# sourceMappingURL=UploadEventItem.js.map