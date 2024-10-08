
//forEach iterates the items
Array.prototype.myForEach = (cb) => {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};



//map-creates a new array by applying a logic function to each element of original array.
Array.prototype.myMap = (cb) => {
    let output = [];
    for (let i = 0; i <= this.length; i++) {
        output.push(cb(this[i], index, this));
    }
    return output
}

[1, 2].map(cb).myFilter(cb);//important Not for forEach function


//filter-creates a array of elements that passes the test cases of logic function.
Array.prototype.myFilter = () => {
    let output = [];
    for (let i = 0; i <= this.length; i++) {
        if (cb(this[i], value, this)) {
            output.push(this[i]);
        }
    }
    return output;
}



//reduce-used to reduce array to single value 
//  Always get previous value on which next computation to be performed (accumulator=initial value)


Array.prototype.myReduce = (cb, initialValue) => {
    let Accumulator = initialValue;
    for (let i = o; i < this.length; i++) {
        if (Accumulator) {
            Accumulator = cb(Accumulator, this[i], index, this);
        }

        else {
            Accumulator = this[i];
        }


    }

}
return Accumulator;
}



//code snippets for above methods

// Q-1 Return only name of students in capital

let students = [
    { name: "chirag", rollNumber: 31, marks: 80 },
    { name: 'jenny', rollNumber: 15, marks: 69 },
    { name: 'rajat', rollNumber: 151, marks: 29 },
]

const name = students.map((student) => {
    return student.name.toUpperCase()
})


// Q-2 Return only the details of those who scored more than 60

const details = students.filter((student) => {
    if (student.score > 60) {
        return true
    }
    else false
})

// Q-3 Return only the details of those who scored more than 60 & marks greater than 15

const moreDetails = students.filter((student) => {
    if (student.score > 60 && student.marks > 15) {
        return true
    }
    else false
})

// Q-4 Sum of marks of all students


const marks = students.reduce((acc, curr) => {
    return acc = curr.marks + acc
}, 0)

// Q-5 Return only names of students who scored more than 60

const nameMarks = students.filter((student) => {
    if (student.score > 60) {
        return true
    }
    else false
})

const nameMark = nameMarks.map((student) => {
    return student.name
})

// Q-6 Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
// use map,filter & than reduce