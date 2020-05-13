import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var MyButtonComponent = /** @class */ (function () {
    function MyButtonComponent() {
    }
    MyButtonComponent.prototype.ngOnInit = function () {
    };
    MyButtonComponent = __decorate([
        Component({
            selector: 'cdo-poc-my-button',
            template: "<p>my-button works!</p>\n",
            styles: [""]
        })
    ], MyButtonComponent);
    return MyButtonComponent;
}());

var ReusableModule = /** @class */ (function () {
    function ReusableModule() {
    }
    ReusableModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [MyButtonComponent]
        })
    ], ReusableModule);
    return ReusableModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { MyButtonComponent, ReusableModule };
//# sourceMappingURL=cdo-reusable.js.map
