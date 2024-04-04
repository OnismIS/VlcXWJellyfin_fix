package org.chromium.mojo_base.mojom;

import java.nio.ByteBuffer;
import java.util.ArrayList;
import org.chromium.mojo.bindings.DataHeader;
import org.chromium.mojo.bindings.Decoder;
import org.chromium.mojo.bindings.Encoder;
import org.chromium.mojo.bindings.Message;
import org.chromium.mojo.bindings.Struct;

/* loaded from: xwalk_main_fat-77.3.aar:classes.jar:org/chromium/mojo_base/mojom/Token.class */
public final class Token extends Struct {
    private static final int STRUCT_SIZE = 24;
    private static final DataHeader[] VERSION_ARRAY = {new DataHeader(24, 0)};
    private static final DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public long high;
    public long low;

    private Token(int version) {
        super(24, version);
    }

    public Token() {
        this(0);
    }

    public static Token deserialize(Message message) {
        return decode(new Decoder(message));
    }

    public static Token deserialize(ByteBuffer data) {
        return deserialize(new Message(data, new ArrayList()));
    }

    public static Token decode(Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        try {
            DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            int elementsOrVersion = mainDataHeader.elementsOrVersion;
            Token result = new Token(elementsOrVersion);
            result.high = decoder0.readLong(8);
            result.low = decoder0.readLong(16);
            decoder0.decreaseStackDepth();
            return result;
        } catch (Throwable th) {
            decoder0.decreaseStackDepth();
            throw th;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // org.chromium.mojo.bindings.Struct
    public final void encode(Encoder encoder) {
        Encoder encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO);
        encoder0.encode(this.high, 8);
        encoder0.encode(this.low, 16);
    }
}
