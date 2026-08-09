package tree_sitter_brainfuckplus_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_brainfuckplus "github.com/nulldword/tree-sitter-brainfuckplus/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_brainfuckplus.Language())
	if language == nil {
		t.Errorf("Error loading Brainfuck + grammar")
	}
}
