$(function() {

    $(document).ready(function(){
            var  rasdm = [];
            $('.cbtn').on('click', function(){

                var classes = [];

                //grabb the volues
                (function(){
                    return classes = [
                        $('.wBread').val(),
                        $('.bBread').val(),

                        $('.buckwheat').val(),
                        $('.rise').val(),
                        $('.oatmeal').val(),
                        $('.wheat').val(),
                        $('.peas').val(),
                        $('.pasta').val(),

                        $('.breast').val(),
                        $('.liver').val(),
                        $('.heart').val(),
                        $('.egg').val(),
                        $('.wing').val(),

                        $('.potato').val(),
                        $('.tomato').val(),
                        $('.cucumber').val(),
                        $('.cabage').val(),
                        $('.onion').val(),

                        $('.peasS').val(),
                        $('.cabageS').val(),
                        $('.chickenS').val(),
                        $('.borscht').val()
                    ];
                })();

                var products = [
                    /*"whiteBread" :*/ [0.075, 0.03, 0.51, 2.64],
                    /*"blackBread" :*/ [0.066, 0.012, 0.396, 1.98],

                    /*"buckwheat" :*/ [0.126, 0.03, 0.68, 3.39],
                    /*"rise" :*/ [0.07, 0.008, 0.79, 3.44],
                    /*"oatmeal" :*/ [0.135, 0.07, 0.587, 3.52],
                    /*"wheat" :*/ [0.11, 0.012, 0.685, 3.29],
                    /*"peas" :*/ [0.22, 0.022, 0.529, 3.33],
                    /*"pasta" :*/ [0.11, 0.016, 0.684, 3.33],

                    /*"breast" :*/ [0.236, 0.019, 0.004, 1.13],
                    /*"liver" :*/ [0.19, 0.063, 0.014, 1.4],
                    /*"heart" :*/ [0.158, 0.103, 0.008, 1.59],
                    /*"egg" :*/ [0.127, 0.109, 0.007, 1.57],
                    /*"wing" :*/ [0.192, 0.122, 0, 1.86],

                    /*"potato" :*/ [0.02, 0.004, 0.181, 0.8],
                    /*"tomato" :*/ [0.006, 0.002, 0.042, 0.2],
                    /*"cucumber" :*/ [0.008, 0.001, 0.028, 0.15],
                    /*"cabbage" :*/ [0.018, 0.001, 0.047, 0.27],
                    /*"onion" :*/ [0.014, 0, 0.104, 0.41],

                    /*"peasSoup" :*/ [0.044, 0.024, 0.089, 0.66],
                    /*"cabbageSoup" :*/ [0.02, 0.026, 0.04, 0.466],
                    /*"chickenSoup" :*/ [0.03, 0.015, 0.051, 0.45],
                    /*"borscht" :*/ [0.011, 0.022, 0.067, 0.49]
                ];

                //calculate
                var p = 0, f = 0, ch = 0, kl = 0;

                for(var i = 0; i <= classes.length; i++){
                    if( classes[i] > 0){
                        p = +(p + (products[i][0] * classes[i])).toFixed(2);
                        f = +(f + +(products[i][1] * classes[i])).toFixed(2);
                        ch = +(ch + +(products[i][2] * classes[i])).toFixed(2);
                        kl = +(kl + +(products[i][3] * classes[i])).toFixed(2);
                    }
                }

                //write to right module
                if(kl != 0){
                    rasdm.push(p, f, ch, kl);

                    (function(){

                        //total & table
                        var prot = [], fat = [], crb = [], kcal = [];

                        if( rasdm.length <= 24){

                            for( var i = 0; i < rasdm.length; i++){

                                $('.rblock').find('td').eq(i).text(rasdm[i]); //table

                                //total
                                if( i % 4 == 0 ) prot.push(rasdm[i]);
                                if( i % 4 == 1 ) fat.push(rasdm[i]);
                                if( i % 4 == 2 ) crb.push(rasdm[i]);
                                if( i % 4 == 3 ) kcal.push(rasdm[i]);
                            }

                            return [
                                $('.t1').text( +(prot.reduce(function (sum, current){return current + sum;}, 0).toFixed(2))),
                                $('.t2').text( +(fat.reduce(function (sum, current){return current + sum;}, 0).toFixed(2))),
                                $('.t3').text( +(crb.reduce(function (sum, current){return current + sum;}, 0).toFixed(2))),
                                $('.t4').text( +(kcal.reduce(function (sum, current){return current + sum;}, 0).toFixed(2)))
                            ];
                        }
                    })();
                }

                //reset right button
                $('.rrbtn').on('click', function () {
                    rasdm.length = 0;
                    $('.rblock td').each(function(){
                        $(this).text('');
                    });
                });

                return [
                    $('.protein').prop('value', p),
                    $('.fat').prop('value', f),
                    $('.carbohydrate').prop('value', ch),
                    $('.kcals').prop('value', kl)
                ];
            })
        });

    $('.rbtn').on('click', function(){
        $('.mblock input').each(function(){
            $(this).val('');
        })
    });

    //add enter and escape keypress
    $(document).keyup(function (e) {
        if (e.keyCode === 13) $(".cbtn").click(); //enter
        if (e.keyCode === 27) $(".rbtn").click(); //esc
    })

});
