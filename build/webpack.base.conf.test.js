const rewire = require("rewire")
const webpack_base_conf = rewire("./webpack.base.conf")
const resolve = webpack_base_conf.__get__("resolve")
// @ponicode
describe("resolve", () => {
    test("0", () => {
        let callFunction = () => {
            resolve("/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            resolve("path/to/folder/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            resolve(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            resolve("path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            resolve("C:\\\\path\\to\\folder\\")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            resolve(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
