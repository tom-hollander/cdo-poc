import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let MyButtonComponent = class MyButtonComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyButtonComponent = __decorate([
    Component({
        selector: 'cdo-poc-my-button',
        template: "<p>my-button works!</p>\n",
        styles: [""]
    })
], MyButtonComponent);

let ReusableModule = class ReusableModule {
};
ReusableModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [MyButtonComponent]
    })
], ReusableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { MyButtonComponent, ReusableModule };
//# sourceMappingURL=cdo-reusable.js.map
