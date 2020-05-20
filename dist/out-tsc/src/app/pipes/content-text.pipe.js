import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let ContentTextPipe = class ContentTextPipe {
    transform(value, maxlen = 15) {
        if (value.length > maxlen) {
            return value.substr(0, maxlen) + '...';
        }
        return value;
    }
};
ContentTextPipe = __decorate([
    Pipe({
        name: 'contentText',
    })
], ContentTextPipe);
export { ContentTextPipe };
//# sourceMappingURL=content-text.pipe.js.map