package org.chromium.blink.mojom;

import org.chromium.mojo.bindings.DeserializationException;

/* loaded from: xwalk_main_fat-77.3.aar:classes.jar:org/chromium/blink/mojom/StorageType.class */
public final class StorageType {
    private static final boolean IS_EXTENSIBLE = false;
    public static final int TEMPORARY = 0;
    public static final int PERSISTENT = 1;
    public static final int SYNCABLE = 2;
    public static final int QUOTA_NOT_MANAGED = 3;
    public static final int UNKNOWN = 4;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 4;
    }

    public static void validate(int value) {
        if (!isKnownValue(value)) {
            throw new DeserializationException("Invalid enum value.");
        }
    }

    private StorageType() {
    }
}
