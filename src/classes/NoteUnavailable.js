export default class NoteUnavailableException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
