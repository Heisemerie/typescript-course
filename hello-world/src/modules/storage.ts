export default class Stores {} //for permanently storing objects

export enum Format {
  Raw,
  Compressed,
}

class Compressor {} //for compressing object before storing
class Encryptor {} //for encrpting objects before storage
//other modules should not know of these objects
