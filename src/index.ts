class Test {
  a: number
  b: number
  constructor() {
    this.a = 1
    this.b = 2
  }
  /**
   * C function
   * @param d Some d
   * @param e Some e
   */
  c(d, e) {
    this.a = d + e
  }
}

export default Test
