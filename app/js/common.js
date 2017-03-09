$(function() {

    $(document).ready(function(){
            var  rasdm = [];
            $('.cbtn').on('click', function(){
                var classes = [];
                var cl = function(){
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
                };
                var products = [];
                var pr = function(){
                    return products = [
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
                };
                cl();
                pr();

                var p = 0, f = 0, ch = 0, kl = 0;

                for(var i = 0; i <= classes.length; i++){
                    if( classes[i] > 0){
                        p = +(p + (products[i][0] * classes[i])).toFixed(2);
                        f = +(f + +(products[i][1] * classes[i])).toFixed(2);
                        ch = +(ch + +(products[i][2] * classes[i])).toFixed(2);
                        kl = +(kl + +(products[i][3] * classes[i])).toFixed(2);
                    }
                }
                if( p && f && ch && kl != 0){
                    rasdm.push(p, f, ch, kl);

                    var rasd = function(){

                        var tot = function () {
                            if(rasdm.length == 4) {
                                return [
                                    $('.t1').text(+(rasdm[0]).toFixed(2)),
                                    $('.t2').text(+(rasdm[1]).toFixed(2)),
                                    $('.t3').text(+(rasdm[2]).toFixed(2)),
                                    $('.t4').text(+(rasdm[3]).toFixed(2))
                                ];
                            } else if(rasdm.length == 8){
                                return [
                                    $('.t1').text(+(rasdm[0] + rasdm[4]).toFixed(2)),
                                    $('.t2').text(+(rasdm[1] + rasdm[5]).toFixed(2)),
                                    $('.t3').text(+(rasdm[2] + rasdm[6]).toFixed(2)),
                                    $('.t4').text(+(rasdm[3] + rasdm[7]).toFixed(2))
                                ];
                            } else if(rasdm.length == 12){
                                return [
                                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]).toFixed(2)),
                                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]).toFixed(2)),
                                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10]).toFixed(2)),
                                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11]).toFixed(2))
                                ];
                            } else if(rasdm.length == 16){
                                return [
                                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]  + rasdm[12]).toFixed(2)),
                                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]  + rasdm[13]).toFixed(2)),
                                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10] + rasdm[14]).toFixed(2)),
                                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11] + rasdm[15]).toFixed(2))
                                ];
                            } else if(rasdm.length == 20){
                                return [
                                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]  + rasdm[12] + rasdm[16]).toFixed(2)),
                                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]  + rasdm[13] + rasdm[17]).toFixed(2)),
                                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10] + rasdm[14] + rasdm[18]).toFixed(2)),
                                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11] + rasdm[15] + rasdm[19]).toFixed(2))
                                ];
                            } else if(rasdm.length == 24){
                                return [
                                    $('.t1').text(+(rasdm[0] + rasdm[4] + rasdm[8]  + rasdm[12] + rasdm[16] + rasdm[20]).toFixed(2)),
                                    $('.t2').text(+(rasdm[1] + rasdm[5] + rasdm[9]  + rasdm[13] + rasdm[17] + rasdm[21]).toFixed(2)),
                                    $('.t3').text(+(rasdm[2] + rasdm[6] + rasdm[10] + rasdm[14] + rasdm[18] + rasdm[22]).toFixed(2)),
                                    $('.t4').text(+(rasdm[3] + rasdm[7] + rasdm[11] + rasdm[15] + rasdm[19] + rasdm[23]).toFixed(2))
                                ];
                            }
                        };

                        tot();

                        return [
                            $('.11').text(rasdm[0]),
                            $('.12').text(rasdm[1]),
                            $('.13').text(rasdm[2]),
                            $('.14').text(rasdm[3]),

                            $('.21').text(rasdm[4]),
                            $('.22').text(rasdm[5]),
                            $('.23').text(rasdm[6]),
                            $('.24').text(rasdm[7]),

                            $('.31').text(rasdm[8]),
                            $('.32').text(rasdm[9]),
                            $('.33').text(rasdm[10]),
                            $('.34').text(rasdm[11]),

                            $('.41').text(rasdm[12]),
                            $('.42').text(rasdm[13]),
                            $('.43').text(rasdm[14]),
                            $('.44').text(rasdm[15]),

                            $('.51').text(rasdm[16]),
                            $('.52').text(rasdm[17]),
                            $('.53').text(rasdm[18]),
                            $('.54').text(rasdm[19]),

                            $('.61').text(rasdm[20]),
                            $('.62').text(rasdm[21]),
                            $('.63').text(rasdm[22]),
                            $('.64').text(rasdm[23])
                        ];
                    };
                    rasd();
                }

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
    })

});
