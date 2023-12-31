// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file coreum/asset/ft/v1/tx.proto (package coreum.asset.ft.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Feature } from "./token_pb.js";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./params_pb.js";

/**
 * MsgIssue defines message to issue new fungible token.
 *
 * @generated from message coreum.asset.ft.v1.MsgIssue
 */
export class MsgIssue extends Message<MsgIssue> {
  /**
   * @generated from field: string issuer = 1;
   */
  issuer = "";

  /**
   * @generated from field: string symbol = 2;
   */
  symbol = "";

  /**
   * @generated from field: string subunit = 3;
   */
  subunit = "";

  /**
   * @generated from field: uint32 precision = 4;
   */
  precision = 0;

  /**
   * @generated from field: string initial_amount = 5;
   */
  initialAmount = "";

  /**
   * @generated from field: string description = 6;
   */
  description = "";

  /**
   * @generated from field: repeated coreum.asset.ft.v1.Feature features = 7;
   */
  features: Feature[] = [];

  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   *
   * @generated from field: string burn_rate = 8;
   */
  burnRate = "";

  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token issuer account.
   *
   * @generated from field: string send_commission_rate = 9;
   */
  sendCommissionRate = "";

  /**
   * @generated from field: string uri = 10;
   */
  uri = "";

  /**
   * @generated from field: string uri_hash = 11;
   */
  uriHash = "";

  constructor(data?: PartialMessage<MsgIssue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgIssue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subunit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "precision", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "initial_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "features", kind: "enum", T: proto3.getEnumType(Feature), repeated: true },
    { no: 8, name: "burn_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "send_commission_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "uri_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIssue {
    return new MsgIssue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIssue {
    return new MsgIssue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIssue {
    return new MsgIssue().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIssue | PlainMessage<MsgIssue> | undefined, b: MsgIssue | PlainMessage<MsgIssue> | undefined): boolean {
    return proto3.util.equals(MsgIssue, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgMint
 */
export class MsgMint extends Message<MsgMint> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 2;
   */
  coin?: Coin;

  /**
   * @generated from field: string recipient = 3;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgMint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgMint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coin", kind: "message", T: Coin },
    { no: 3, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMint {
    return new MsgMint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMint {
    return new MsgMint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMint {
    return new MsgMint().fromJsonString(jsonString, options);
  }

  static equals(a: MsgMint | PlainMessage<MsgMint> | undefined, b: MsgMint | PlainMessage<MsgMint> | undefined): boolean {
    return proto3.util.equals(MsgMint, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgBurn
 */
export class MsgBurn extends Message<MsgBurn> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
   */
  coin?: Coin;

  constructor(data?: PartialMessage<MsgBurn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgBurn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "coin", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBurn {
    return new MsgBurn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBurn {
    return new MsgBurn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBurn {
    return new MsgBurn().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBurn | PlainMessage<MsgBurn> | undefined, b: MsgBurn | PlainMessage<MsgBurn> | undefined): boolean {
    return proto3.util.equals(MsgBurn, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgFreeze
 */
export class MsgFreeze extends Message<MsgFreeze> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string account = 2;
   */
  account = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
   */
  coin?: Coin;

  constructor(data?: PartialMessage<MsgFreeze>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgFreeze";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "coin", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFreeze {
    return new MsgFreeze().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFreeze {
    return new MsgFreeze().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFreeze {
    return new MsgFreeze().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFreeze | PlainMessage<MsgFreeze> | undefined, b: MsgFreeze | PlainMessage<MsgFreeze> | undefined): boolean {
    return proto3.util.equals(MsgFreeze, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgUnfreeze
 */
export class MsgUnfreeze extends Message<MsgUnfreeze> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string account = 2;
   */
  account = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
   */
  coin?: Coin;

  constructor(data?: PartialMessage<MsgUnfreeze>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgUnfreeze";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "coin", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnfreeze {
    return new MsgUnfreeze().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnfreeze {
    return new MsgUnfreeze().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnfreeze {
    return new MsgUnfreeze().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnfreeze | PlainMessage<MsgUnfreeze> | undefined, b: MsgUnfreeze | PlainMessage<MsgUnfreeze> | undefined): boolean {
    return proto3.util.equals(MsgUnfreeze, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgSetFrozen
 */
export class MsgSetFrozen extends Message<MsgSetFrozen> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string account = 2;
   */
  account = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
   */
  coin?: Coin;

  constructor(data?: PartialMessage<MsgSetFrozen>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgSetFrozen";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "coin", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetFrozen {
    return new MsgSetFrozen().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetFrozen {
    return new MsgSetFrozen().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetFrozen {
    return new MsgSetFrozen().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetFrozen | PlainMessage<MsgSetFrozen> | undefined, b: MsgSetFrozen | PlainMessage<MsgSetFrozen> | undefined): boolean {
    return proto3.util.equals(MsgSetFrozen, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgGloballyFreeze
 */
export class MsgGloballyFreeze extends Message<MsgGloballyFreeze> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<MsgGloballyFreeze>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgGloballyFreeze";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGloballyFreeze {
    return new MsgGloballyFreeze().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGloballyFreeze {
    return new MsgGloballyFreeze().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGloballyFreeze {
    return new MsgGloballyFreeze().fromJsonString(jsonString, options);
  }

  static equals(a: MsgGloballyFreeze | PlainMessage<MsgGloballyFreeze> | undefined, b: MsgGloballyFreeze | PlainMessage<MsgGloballyFreeze> | undefined): boolean {
    return proto3.util.equals(MsgGloballyFreeze, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgGloballyUnfreeze
 */
export class MsgGloballyUnfreeze extends Message<MsgGloballyUnfreeze> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<MsgGloballyUnfreeze>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgGloballyUnfreeze";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGloballyUnfreeze {
    return new MsgGloballyUnfreeze().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGloballyUnfreeze {
    return new MsgGloballyUnfreeze().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGloballyUnfreeze {
    return new MsgGloballyUnfreeze().fromJsonString(jsonString, options);
  }

  static equals(a: MsgGloballyUnfreeze | PlainMessage<MsgGloballyUnfreeze> | undefined, b: MsgGloballyUnfreeze | PlainMessage<MsgGloballyUnfreeze> | undefined): boolean {
    return proto3.util.equals(MsgGloballyUnfreeze, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgSetWhitelistedLimit
 */
export class MsgSetWhitelistedLimit extends Message<MsgSetWhitelistedLimit> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string account = 2;
   */
  account = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
   */
  coin?: Coin;

  constructor(data?: PartialMessage<MsgSetWhitelistedLimit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgSetWhitelistedLimit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "coin", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetWhitelistedLimit {
    return new MsgSetWhitelistedLimit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetWhitelistedLimit {
    return new MsgSetWhitelistedLimit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetWhitelistedLimit {
    return new MsgSetWhitelistedLimit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetWhitelistedLimit | PlainMessage<MsgSetWhitelistedLimit> | undefined, b: MsgSetWhitelistedLimit | PlainMessage<MsgSetWhitelistedLimit> | undefined): boolean {
    return proto3.util.equals(MsgSetWhitelistedLimit, a, b);
  }
}

/**
 * MsgUpgradeTokenV1 is the message upgrading token to V1.
 *
 * @generated from message coreum.asset.ft.v1.MsgUpgradeTokenV1
 */
export class MsgUpgradeTokenV1 extends Message<MsgUpgradeTokenV1> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  /**
   * @generated from field: bool ibc_enabled = 3;
   */
  ibcEnabled = false;

  constructor(data?: PartialMessage<MsgUpgradeTokenV1>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgUpgradeTokenV1";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ibc_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeTokenV1 {
    return new MsgUpgradeTokenV1().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeTokenV1 {
    return new MsgUpgradeTokenV1().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeTokenV1 {
    return new MsgUpgradeTokenV1().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpgradeTokenV1 | PlainMessage<MsgUpgradeTokenV1> | undefined, b: MsgUpgradeTokenV1 | PlainMessage<MsgUpgradeTokenV1> | undefined): boolean {
    return proto3.util.equals(MsgUpgradeTokenV1, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: coreum.asset.ft.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * @generated from message coreum.asset.ft.v1.EmptyResponse
 */
export class EmptyResponse extends Message<EmptyResponse> {
  constructor(data?: PartialMessage<EmptyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "coreum.asset.ft.v1.EmptyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyResponse {
    return new EmptyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyResponse {
    return new EmptyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyResponse {
    return new EmptyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: EmptyResponse | PlainMessage<EmptyResponse> | undefined, b: EmptyResponse | PlainMessage<EmptyResponse> | undefined): boolean {
    return proto3.util.equals(EmptyResponse, a, b);
  }
}

