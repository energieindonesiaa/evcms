import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from 'app/core/user/user.service';


@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    userid: string;
    /**
     * Constructor
     */
    constructor(
        private _userService: UserService
    )
    {
        this.userid = localStorage.getItem("userId");
    }
}
