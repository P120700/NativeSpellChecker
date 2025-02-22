#import "TurboSpellcheckModule.h"
#import <UIKit/UIKit.h>

@implementation TurboSpellcheckModule
RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeTurboSpellcheckModuleSpecJSI>(params);
}

- (NSNumber *)isValid:(NSString *)value {
  UITextChecker *checker = [[UITextChecker alloc] init];
    NSLocale *locale = [NSLocale currentLocale];
    NSString *language = [locale objectForKey:NSLocaleLanguageCode];

    NSRange range = NSMakeRange(0, value.length);
    
    while (range.location < value.length) {
        NSRange misspelledRange = [checker rangeOfMisspelledWordInString:value
                                                                   range:range
                                                              startingAt:0
                                                                    wrap:NO
                                                                language:language];

        if (misspelledRange.location != NSNotFound) {
            return @0;
        }

        range.location = misspelledRange.location + misspelledRange.length;
        range.length = value.length - range.location;
    }
    
    return @1;
}

@end
