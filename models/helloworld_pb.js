/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.exportSymbol('proto.helloworld.HelloRequest', null, global);
goog.exportSymbol('proto.helloworld.HelloResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.helloworld.HelloRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.helloworld.HelloRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.helloworld.HelloRequest.displayName = 'proto.helloworld.HelloRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.helloworld.HelloRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.helloworld.HelloRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.helloworld.HelloRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.HelloRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paramStruct: (f = msg.getParamStruct()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    paramListValue: (f = msg.getParamListValue()) && google_protobuf_struct_pb.ListValue.toObject(includeInstance, f),
    paramValue: (f = msg.getParamValue()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.helloworld.HelloRequest}
 */
proto.helloworld.HelloRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.helloworld.HelloRequest;
  return proto.helloworld.HelloRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.helloworld.HelloRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.helloworld.HelloRequest}
 */
proto.helloworld.HelloRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParamStruct(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.ListValue;
      reader.readMessage(value,google_protobuf_struct_pb.ListValue.deserializeBinaryFromReader);
      msg.setParamListValue(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setParamValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.helloworld.HelloRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.helloworld.HelloRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.helloworld.HelloRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.HelloRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamStruct();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getParamListValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.ListValue.serializeBinaryToWriter
    );
  }
  f = message.getParamValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.helloworld.HelloRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.helloworld.HelloRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional google.protobuf.Struct param_struct = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.helloworld.HelloRequest.prototype.getParamStruct = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.helloworld.HelloRequest.prototype.setParamStruct = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.helloworld.HelloRequest.prototype.clearParamStruct = function() {
  this.setParamStruct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.helloworld.HelloRequest.prototype.hasParamStruct = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.ListValue param_list_value = 3;
 * @return {?proto.google.protobuf.ListValue}
 */
proto.helloworld.HelloRequest.prototype.getParamListValue = function() {
  return /** @type{?proto.google.protobuf.ListValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.ListValue, 3));
};


/** @param {?proto.google.protobuf.ListValue|undefined} value */
proto.helloworld.HelloRequest.prototype.setParamListValue = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.helloworld.HelloRequest.prototype.clearParamListValue = function() {
  this.setParamListValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.helloworld.HelloRequest.prototype.hasParamListValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Value param_value = 4;
 * @return {?proto.google.protobuf.Value}
 */
proto.helloworld.HelloRequest.prototype.getParamValue = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 4));
};


/** @param {?proto.google.protobuf.Value|undefined} value */
proto.helloworld.HelloRequest.prototype.setParamValue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.helloworld.HelloRequest.prototype.clearParamValue = function() {
  this.setParamValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.helloworld.HelloRequest.prototype.hasParamValue = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.helloworld.HelloResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.helloworld.HelloResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.helloworld.HelloResponse.displayName = 'proto.helloworld.HelloResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.helloworld.HelloResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.helloworld.HelloResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.helloworld.HelloResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.HelloResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    snakeCase: jspb.Message.getFieldWithDefault(msg, 2, false),
    paramStruct: (f = msg.getParamStruct()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    paramListValue: (f = msg.getParamListValue()) && google_protobuf_struct_pb.ListValue.toObject(includeInstance, f),
    paramValue: (f = msg.getParamValue()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.helloworld.HelloResponse}
 */
proto.helloworld.HelloResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.helloworld.HelloResponse;
  return proto.helloworld.HelloResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.helloworld.HelloResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.helloworld.HelloResponse}
 */
proto.helloworld.HelloResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSnakeCase(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParamStruct(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.ListValue;
      reader.readMessage(value,google_protobuf_struct_pb.ListValue.deserializeBinaryFromReader);
      msg.setParamListValue(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setParamValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.helloworld.HelloResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.helloworld.HelloResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.helloworld.HelloResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.HelloResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSnakeCase();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getParamStruct();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getParamListValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.ListValue.serializeBinaryToWriter
    );
  }
  f = message.getParamValue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.helloworld.HelloResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.helloworld.HelloResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool snake_case = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.helloworld.HelloResponse.prototype.getSnakeCase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.helloworld.HelloResponse.prototype.setSnakeCase = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional google.protobuf.Struct param_struct = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.helloworld.HelloResponse.prototype.getParamStruct = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.helloworld.HelloResponse.prototype.setParamStruct = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.helloworld.HelloResponse.prototype.clearParamStruct = function() {
  this.setParamStruct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.helloworld.HelloResponse.prototype.hasParamStruct = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.ListValue param_list_value = 4;
 * @return {?proto.google.protobuf.ListValue}
 */
proto.helloworld.HelloResponse.prototype.getParamListValue = function() {
  return /** @type{?proto.google.protobuf.ListValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.ListValue, 4));
};


/** @param {?proto.google.protobuf.ListValue|undefined} value */
proto.helloworld.HelloResponse.prototype.setParamListValue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.helloworld.HelloResponse.prototype.clearParamListValue = function() {
  this.setParamListValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.helloworld.HelloResponse.prototype.hasParamListValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Value param_value = 5;
 * @return {?proto.google.protobuf.Value}
 */
proto.helloworld.HelloResponse.prototype.getParamValue = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 5));
};


/** @param {?proto.google.protobuf.Value|undefined} value */
proto.helloworld.HelloResponse.prototype.setParamValue = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.helloworld.HelloResponse.prototype.clearParamValue = function() {
  this.setParamValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.helloworld.HelloResponse.prototype.hasParamValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.helloworld);
