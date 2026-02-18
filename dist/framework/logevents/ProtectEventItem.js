"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectEventItem = void 0;
const LogEventsItem_1 = require("./LogEventsItem");
class ProtectEventItem extends LogEventsItem_1.LogEventsItem {
    isProtecting() {
        return this.data.action === 'protect';
    }
    isModifying() {
        return this.data.action === 'modify';
    }
    isUnprotecting() {
        return this.data.action === 'unprotect';
    }
}
exports.ProtectEventItem = ProtectEventItem;
//# sourceMappingURL=ProtectEventItem.js.map