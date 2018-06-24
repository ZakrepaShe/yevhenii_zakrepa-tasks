class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    // Ваш код (должен тут быть)
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
      document.addEventListener(event, e=>handler(e.detail), false);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
      this[event] = new CustomEvent(event, { 'detail': data });
      document.dispatchEvent(this[event]);
  }
}

export default Emitter;
