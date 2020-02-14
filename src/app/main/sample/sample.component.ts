import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as thai } from './i18n/th';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */

    menuList: any;
    contactList: any;
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, thai);
    }

    ngOnInit() {
        this.menuList = ["ทั้งหมด", "รอยืนยัน", "ยืนยันแล้ว"]
        this.contactList = [
            {
                "_id": "001",
                "title_name": "Mr.",
                "name": "John",
                "lastname": "chowrai",
                "email": "john@email.com",
                "birthdate": "2018-01-24T11:23:00",
                "tel": "0998698965",
                "address": "5/46 ต.ปากน้ำ อ.โพธ์ จ.ไทยแลน"
            },
            {
                "_id": "002",
                "title_name": "Mrs.",
                "name": "jehn",
                "lastname": "loykoh",
                "email": "jehn@email.com",
                "birthdate": "2018-01-24T11:23:00",
                "tel": "0996532698",
                "address": "103/68 ต.ขนม อ.ลอดช่อง จ.สิงคโปร์"
            }
        ]
    }

    selectedMenu(event) {
        console.log(event)
    }

    deleteList(event) {
        console.log(event)
    }

    onSaveContactData(event) {
        console.log(event)
    }

}
