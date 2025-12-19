export default class Stores {} //for permanently storing objects

export enum Format {
  Raw,
  Compressed,
}

class Compressor {} //for compressing object before storing
Compressor;
class Encryptor {} //for encrpting objects before storage
Encryptor;
//other modules should not know of these objects
