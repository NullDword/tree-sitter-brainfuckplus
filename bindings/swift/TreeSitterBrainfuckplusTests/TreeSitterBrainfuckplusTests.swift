import XCTest
import SwiftTreeSitter
import TreeSitterBrainfuckplus

final class TreeSitterBrainfuckplusTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_brainfuckplus())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Brainfuck + grammar")
    }
}
