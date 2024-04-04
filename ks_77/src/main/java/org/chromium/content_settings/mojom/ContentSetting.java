package org.chromium.content_settings.mojom;

import org.chromium.mojo.bindings.DeserializationException;

/* loaded from: xwalk_main_fat-77.3.aar:classes.jar:org/chromium/content_settings/mojom/ContentSetting.class */
public final class ContentSetting {
    private static final boolean IS_EXTENSIBLE = false;
    public static final int DEFAULT = 0;
    public static final int ALLOW = 1;
    public static final int BLOCK = 2;
    public static final int ASK = 3;
    public static final int SESSION_ONLY = 4;
    public static final int DETECT_IMPORTANT_CONTENT = 5;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 5;
    }

    public static void validate(int value) {
        if (!isKnownValue(value)) {
            throw new DeserializationException("Invalid enum value.");
        }
    }

    private ContentSetting() {
    }
}
