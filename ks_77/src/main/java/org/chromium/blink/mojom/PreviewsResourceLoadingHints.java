package org.chromium.blink.mojom;

import java.nio.ByteBuffer;
import java.util.ArrayList;
import org.chromium.mojo.bindings.DataHeader;
import org.chromium.mojo.bindings.Decoder;
import org.chromium.mojo.bindings.Encoder;
import org.chromium.mojo.bindings.Message;
import org.chromium.mojo.bindings.Struct;

/* loaded from: xwalk_main_fat-77.3.aar:classes.jar:org/chromium/blink/mojom/PreviewsResourceLoadingHints.class */
public final class PreviewsResourceLoadingHints extends Struct {
    private static final int STRUCT_SIZE = 24;
    private static final DataHeader[] VERSION_ARRAY = {new DataHeader(24, 0)};
    private static final DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public long ukmSourceId;
    public String[] subresourcesToBlock;

    private PreviewsResourceLoadingHints(int version) {
        super(24, version);
    }

    public PreviewsResourceLoadingHints() {
        this(0);
    }

    public static PreviewsResourceLoadingHints deserialize(Message message) {
        return decode(new Decoder(message));
    }

    public static PreviewsResourceLoadingHints deserialize(ByteBuffer data) {
        return deserialize(new Message(data, new ArrayList()));
    }

    public static PreviewsResourceLoadingHints decode(Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        try {
            DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            int elementsOrVersion = mainDataHeader.elementsOrVersion;
            PreviewsResourceLoadingHints result = new PreviewsResourceLoadingHints(elementsOrVersion);
            result.ukmSourceId = decoder0.readLong(8);
            Decoder decoder1 = decoder0.readPointer(16, false);
            DataHeader si1 = decoder1.readDataHeaderForPointerArray(-1);
            result.subresourcesToBlock = new String[si1.elementsOrVersion];
            for (int i1 = 0; i1 < si1.elementsOrVersion; i1++) {
                result.subresourcesToBlock[i1] = decoder1.readString(8 + (8 * i1), false);
            }
            return result;
        } finally {
            decoder0.decreaseStackDepth();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // org.chromium.mojo.bindings.Struct
    public final void encode(Encoder encoder) {
        Encoder encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO);
        encoder0.encode(this.ukmSourceId, 8);
        if (this.subresourcesToBlock == null) {
            encoder0.encodeNullPointer(16, false);
            return;
        }
        Encoder encoder1 = encoder0.encodePointerArray(this.subresourcesToBlock.length, 16, -1);
        for (int i0 = 0; i0 < this.subresourcesToBlock.length; i0++) {
            encoder1.encode(this.subresourcesToBlock[i0], 8 + (8 * i0), false);
        }
    }
}
