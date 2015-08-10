module.exports = {
  letterGrader: function(n){
    var letter = "";
    if ((n > 100) || (n < 0)){
      return "Invalid grade"
    };
    if (n > 90){
      letter = "A";
    }else if (n > 80){
      letter = "B";
    }else if (n > 70){
      letter = "C";
    }else if (n > 60){
      letter = "D";
    }else{
      letter = "F"
    };
    if ((n > 60) && (n % 10 > 7)){
      letter += "+";
    }else if ((n > 60) && (n % 10 < 3)){
      letter += "-";
    }
    return letter;
  },

  average: function(arr){
    var output;
    arr.reduce(function(prev, curr){
      return output = (prev + curr);
    })
    return (output/arr.length);
  },

  median: function(arr){
    var output;
    arr.sort(function(a,b){
      return a - b;
    });
    if (arr.length % 2 === 0){
      var halfEvenLow = ((arr.length / 2)) - 1;
      output = ((arr[halfEvenLow] + arr[halfEvenLow + 1]) / 2)
    }else{
      var halfOdd = Math.floor(arr.length / 2);
      output = arr[halfOdd];
    }
    return output;
  },

  mode: function(arr){
    var output = {};
    for (var i = 0; i < arr.length; i++){
      if (output.hasOwnProperty(arr[i])){
        output[arr[i]] += 1;
      }else{
        Object.defineProperty(output, arr[i], {
          enumerable: true,
          value: 1,
          writable: true
        });
      }
    }

    var max = Object.keys(output).reduce(function(max,key){
      return (max === undefined || output[key] > output[max]) ? +key : max;
    });
    return max;
  }

}