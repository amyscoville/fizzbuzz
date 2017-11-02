for (var num = 1; num <= 100; num++){
    if (num % 3 === 0 && num % 5 === 0){
        addCircle('fizzbuzz', 'fizzbuzz');
    }else if (num % 3 === 0){
        addCircle('fizz', 'fizz');
    }else if (num % 5 === 0){
        addCircle('buzz','buzz');
    }else{
        addCircle('num',num);
    }
}

function addCircle(className,val){
    var circle = document.createElement('div');
    var text = document.createTextNode(val);
    circle.appendChild(text);
    circle.classList.add('circle');
    circle.classList.add(className);
    var main = document.getElementById('fizzbuzz');
    main.appendChild(circle);
}