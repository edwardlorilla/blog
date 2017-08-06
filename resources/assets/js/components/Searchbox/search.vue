<template>
    <div class="well">
        <h4>Blog Search</h4>
        <div class="input-group autocomplete container-item">

            <input :value="search_prop"
                   @input="searchValue($event.target.value)"
                   type="text"
                   class="form-control autocomplete-input"
                   v-model="inputValue"
                   :id="id"
                   :placeholder="placeholder"
                   @focusout="focusout" @focus="focus"
                   @keydown.13="chooseItem"
                   @keydown.tab="chooseItem"
                   @keydown.40="moveDown"
                   @keydown.38="moveUp"
            >

                        <span class="input-group-btn">
                            <button @click="search_button()" class="btn btn-default" type="button">
                                <span class="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
            <ul class="list-group" :class="{
            'autocomplete-list': true,
            [id+'-list']: true
            }" v-if="searchMatch.length > 0">
                <li class="list-group-item" :class="{active: selectedIndex === index}" v-for="(result, index) in searchMatch"
                    @click="selectItem(index), chooseItem()" v-html="highlightWord(result)">

                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .autocomplete-list {
        position: absolute;
        width: 100%;
    }
    .autocomplete-list li {
        margin: 0;
        padding: 8px 15px;
        border-bottom: 1px solid #f5f5f5;
    }
    .autocomplete-list li:last-child {
        border-bottom: 0;
    }
    .autocomplete-list li:hover, .autocomplete-list li.active {
        background-color: #f5f5f5;
    }

</style>
<script>
    export default {
        data() {
            return {
                id: 'input-' + parseInt(Math.random() * 1000),
                inputValue: "",
                searchMatch: [],
                selectedIndex: 0,
                clickedChooseItem: false,
                wordIndex: 0
            }
        },
        model: {
            prop: 'search_prop',
            event: 'search_event'
        },
        props: ['search_prop', "items", "placeholder", "label", "textarea", "rows", "cols"],
        computed: {
            listToSearch() {
                if (typeof this.items !== "undefined" && this.items.length > 0) {
                    return this.items;
                } else {
                    return standardItems;
                }
            },
            currentWord() {
                return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(' ')[this.wordIndex];
            },
            inputSplitted() {
                return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(" ");
            }
        },
        watch: {
            inputValue() {
                this.focus();
                this.selectedIndex = 0;
                this.wordIndex = this.inputSplitted.length - 1;
            }
        },
        mounted(){
            var _self = this;
            document.querySelector('#' + this.id).addEventListener('input', function () {
                var caret = getCaretCoordinates(this, this.selectionEnd);

                if (_self.searchMatch.length > 0) {
                    var element = document.querySelectorAll('.' + _self.id + '-list');

                    if (element[0]) {
                        element[0].style.top = caret.top + 40 + 'px';
                        element[0].style.left = caret.left + 'px';
                    }
                }
            });
        },
        methods: {
            searchValue(event){
                this.$emit('search_event', event)
            },
            search_button(){
                this.$emit('search_button')
            },
            highlightWord(word) {
                var regex = new RegExp("(" + this.currentWord + ")", "g");
                return word.replace(regex, '<mark>$1</mark>');
            },
            setWord: function setWord(word) {
                var currentWords = this.inputValue.replace(/(\r\n|\n|\r)/gm, '__br__ ').split(' ');
                currentWords[this.wordIndex] = currentWords[this.wordIndex].replace(this.currentWord, word + ' ');
                this.wordIndex += 1;
                this.inputValue = currentWords.join(' ').replace(/__br__\s/g, '\n');
            },
            moveDown() {
                if (this.selectedIndex < this.searchMatch.length - 1) {
                    this.selectedIndex++;
                }
            },
            moveUp() {
                if (this.selectedIndex !== -1) {
                    this.selectedIndex--;
                }
            },
            selectItem(index) {
                this.selectedIndex = index;
                this.chooseItem();
            },
            chooseItem(e) {
                this.clickedChooseItem = true;

                if (this.selectedIndex !== -1 && this.searchMatch.length > 0) {
                    if (e) {
                        e.preventDefault();
                    }
                    this.setWord(this.searchMatch[this.selectedIndex]);
                    this.selectedIndex = -1;
                }
            },
            focusout(e) {
                var _this = this;

                setTimeout(function () {
                    if (!_this.clickedChooseItem) {
                        _this.searchMatch = [];
                        _this.selectedIndex = -1;
                    }
                    _this.clickedChooseItem = false;
                }, 100);
            },
            focus() {
                var _this2 = this;

                this.searchMatch = [];
                if (this.currentWord !== "") {
                    this.searchMatch = this.listToSearch.filter(function (el) {
                        return el.indexOf(_this2.currentWord) >= 0;
                    });
                }
                if (this.searchMatch.length === 1 && this.currentWord === this.searchMatch[0]) {
                    this.searchMatch = [];
                }
            }
        }
    }
</script>
