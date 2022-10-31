//
//  IOSNativeToast.h
//  onboarding_josemak25
//
//  Created by Amakiri Joseph Lucky on 31/10/2022.
//

#ifndef IOSNativeToast_h
#define IOSNativeToast_h

NS_ASSUME_NONNULL_BEGIN

@interface IOSNativeToast : NSObject
-(void) showToast:(NSString*) msg;
-(void) showToast:(NSString*) msg duration:(double) duration;
@end

NS_ASSUME_NONNULL_END

#endif /* IOSNativeToast_h */
