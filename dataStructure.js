

/**
 * Array
 */

//1.  创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩 的方法。 
//2.  将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。 
//3.  修改本章前面出现过的weeklyTemps对象，使它可以使用一个二维数组来存储每月的有 用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。 
//4.  创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一 起，显示成一个单词。

/**
 * 1
 */

{
    function Grade(obj) {
        this._wrap = obj
    }

    Grade.prototype.add = function (name, so) {
        this._wrap[name] = so
    }
    Grade.prototype.show = function (name) {
        console.log(this._wrap[name]);
    }
    let grade = new Grade({
        fxh: 100,
        zm: 20
    })
    grade.add('sy', 50)
    grade.show('sy')
}
/**
 * 2
 */
{
    let word = [1, 2, 3, 4, 5, 6, 7]

    console.log(word);
    console.log(word.reverse());
}

/**
 * 3
 */
{
    let data = {
        1: [[12, 24, 54, 64, 34], [75, 22, 34, 12, 42], [11, 55, 78, 64, 23], [54, 78, 34, 12, 64]]
    }
    function Annual(obj) {
        this._wrap = obj
    }
    Annual.prototype.average = function (arr) {
        return arr.reduce((acc, val) => {

            if (Array.isArray(val)) {
                return acc + this.average(val)
            } else {
                return acc + val
            }
        }, 0) / arr.length
    }
    Annual.prototype.show = function (month, week) {
        if (week) {
            week = week === 'all' ? [0, 1, 2, 3] : [week - 1]
            week.forEach((val) => console.log(this.average(this._wrap[month][val])))
        } else {
            console.log(this.average(this._wrap[month]));
        }
    }


    let annual = new Annual(data)
    annual.show(1, 2)
}

/**
 * 4
 */

{
    function Word(obj) {
        this._wrap = obj
    }
    Word.prototype.showWord = function () {
        console.log(this._wrap.word.join(''))
    }
    let word = new Word({
        word: ['h', 'e', 'l', 'l', 'o', 'w']
    })
    word.showWord()
}


/**
 * List
 */

{
    function List() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement; this.length = length;
        this.contains = contains;
    }


    List.prototype = {
        constructor: List,
        clear: function () {
            this.dataStore = []
        },
        find: function (el) {
            return this.dataStore.some((val, index) => {
                return val === el
            })
        }
    }
}

 /**
  * 
  */