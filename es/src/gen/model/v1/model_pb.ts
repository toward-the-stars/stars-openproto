// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file model/v1/model.proto (package model.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file model/v1/model.proto.
 */
export const file_model_v1_model: GenFile = /*@__PURE__*/
  fileDesc("ChRtb2RlbC92MS9tb2RlbC5wcm90bxIIbW9kZWwudjEiGgoKU2hhcmVNb2RlbBIMCgRuYW1lGAEgASgJQpwBCgxjb20ubW9kZWwudjFCCk1vZGVsUHJvdG9QAVo/Z2l0aHViLmNvbS90b3dhcmQtdGhlLXN0YXJzL3N0YXJzLW9wZW5wcm90by9nby9tb2RlbC92MTttb2RlbHYxogIDTVhYqgIITW9kZWwuVjHKAghNb2RlbFxWMeICFE1vZGVsXFYxXEdQQk1ldGFkYXRh6gIJTW9kZWw6OlYxYgZwcm90bzM");

/**
 * The request message containing the user's name.
 *
 * @generated from message model.v1.ShareModel
 */
export type ShareModel = Message<"model.v1.ShareModel"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message model.v1.ShareModel.
 * Use `create(ShareModelSchema)` to create a new message.
 */
export const ShareModelSchema: GenMessage<ShareModel> = /*@__PURE__*/
  messageDesc(file_model_v1_model, 0);
