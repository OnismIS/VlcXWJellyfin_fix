package org.chromium.payments.mojom;

import java.nio.ByteBuffer;
import java.util.ArrayList;
import org.chromium.mojo.bindings.DataHeader;
import org.chromium.mojo.bindings.Decoder;
import org.chromium.mojo.bindings.Encoder;
import org.chromium.mojo.bindings.Message;
import org.chromium.mojo.bindings.Struct;

/* loaded from: xwalk_main_fat-77.3.aar:classes.jar:org/chromium/payments/mojom/PaymentHandlerResponse.class */
public final class PaymentHandlerResponse extends Struct {
    private static final int STRUCT_SIZE = 32;
    private static final DataHeader[] VERSION_ARRAY = {new DataHeader(32, 0)};
    private static final DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public String methodName;
    public String stringifiedDetails;
    public int responseType;

    private PaymentHandlerResponse(int version) {
        super(32, version);
    }

    public PaymentHandlerResponse() {
        this(0);
    }

    public static PaymentHandlerResponse deserialize(Message message) {
        return decode(new Decoder(message));
    }

    public static PaymentHandlerResponse deserialize(ByteBuffer data) {
        return deserialize(new Message(data, new ArrayList()));
    }

    public static PaymentHandlerResponse decode(Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        try {
            DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            int elementsOrVersion = mainDataHeader.elementsOrVersion;
            PaymentHandlerResponse result = new PaymentHandlerResponse(elementsOrVersion);
            result.methodName = decoder0.readString(8, false);
            result.stringifiedDetails = decoder0.readString(16, false);
            result.responseType = decoder0.readInt(24);
            PaymentEventResponseType.validate(result.responseType);
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
        encoder0.encode(this.methodName, 8, false);
        encoder0.encode(this.stringifiedDetails, 16, false);
        encoder0.encode(this.responseType, 24);
    }
}
