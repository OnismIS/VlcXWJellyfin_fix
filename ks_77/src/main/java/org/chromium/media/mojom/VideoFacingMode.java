package org.chromium.media.mojom;

import org.chromium.mojo.bindings.DeserializationException;

/* loaded from: xwalk_main_fat-77.3.aar:classes.jar:org/chromium/media/mojom/VideoFacingMode.class */
public final class VideoFacingMode {
    private static final boolean IS_EXTENSIBLE = false;
    public static final int NONE = 0;
    public static final int USER = 1;
    public static final int ENVIRONMENT = 2;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 2;
    }

    public static void validate(int value) {
        if (!isKnownValue(value)) {
            throw new DeserializationException("Invalid enum value.");
        }
    }

    private VideoFacingMode() {
    }
}
