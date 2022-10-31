//
//  RCTToastModule.m
//  onboarding_josemak25
//
//  Created by Amakiri Joseph Lucky on 31/10/2022.
//

#import <Foundation/Foundation.h>
// RCTToastModule.m
#import "RCTToastModule.h"
// IOSNativeToast.m
#import "IOSNativeToast.h"


@interface RCTToastModule()

@property (nonatomic, retain) IOSNativeToast *show;

@end

@implementation RCTToastModule


- (instancetype)init {
    self = [super init];
    if (self) {
        self.show = [[IOSNativeToast alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
// To export a module named RCTToastModule
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(show:(NSString *)text)
{
    [self.show showToast:text];
}

@end
