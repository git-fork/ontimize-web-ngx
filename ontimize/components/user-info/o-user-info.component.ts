import { Injector, ElementRef, Component, OnDestroy, NgModule, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { OSharedModule } from '../../shared';
import { InputConverter } from '../../decorators';
import { DialogService, OUserInfoService, UserInfo, LoginService } from '../../services';
import { OLanguageSelectorModule } from '../language-selector/o-language-selector.component';

export const DEFAULT_INPUTS_O_USER_INFO = [
  'useFlagIcons: use-flag-icons'
];

export const DEFAULT_OUTPUTS_O_USER_INFO = [];

@Component({
  selector: 'o-user-info',
  inputs: DEFAULT_INPUTS_O_USER_INFO,
  outputs: DEFAULT_OUTPUTS_O_USER_INFO,
  templateUrl: './o-user-info.component.html',
  styleUrls: ['./o-user-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-user-info]': 'true'
  }
})

export class OUserInfoComponent implements OnDestroy {

  public static DEFAULT_INPUTS_O_USER_INFO = DEFAULT_INPUTS_O_USER_INFO;
  public static DEFAULT_OUTPUTS_O_USER_INFO = DEFAULT_OUTPUTS_O_USER_INFO;

  protected dialogService: DialogService;
  protected loginService: LoginService;
  protected oUserInfoService: OUserInfoService;

  userInfoSubscription: Subscription;
  protected userInfo: UserInfo;

  @InputConverter()
  useFlagIcons: boolean = false;

  constructor(
    protected elRef: ElementRef,
    protected injector: Injector,
    protected router: Router
  ) {
    this.dialogService = this.injector.get(DialogService);
    this.loginService = this.injector.get(LoginService);
    this.oUserInfoService = this.injector.get(OUserInfoService);

    this.userInfo = this.oUserInfoService.getUserInfo();
    this.userInfoSubscription = this.oUserInfoService.getUserInfoObservable().subscribe(res => {
      this.userInfo = res;
    });
  }

  ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
  }

  onLogoutClick() {
    this.loginService.logoutWithConfirmationAndRedirect();
  }

  onSettingsClick() {
    this.router.navigate(['main/settings']);
  }

  get existsUserInfo(): boolean {
    return this.userInfo !== undefined;
  }

  get avatar(): string {
    return this.userInfo ? this.userInfo.avatar : undefined;
  }

  get username(): string {
    return this.userInfo ? this.userInfo.username : undefined;
  }
}

@NgModule({
  declarations: [OUserInfoComponent],
  imports: [OSharedModule, CommonModule, OLanguageSelectorModule, RouterModule],
  exports: [OUserInfoComponent]
})
export class OUserInfoModule { }
