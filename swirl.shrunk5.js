/*
* By: Zolmeister
* http://zolmeister.com
*/

//thanks @marijnjh for http://js1k.com/2010-first/demo/635
for ($ in a)
a[$[0] + ($[6] || '')] = a[$]

mouseX = killing = ind = stopped = mouseY = 0
flowers = []
//~ Z ~
letters = [[[.392, .199], [.569, .190], [.389, .786], [.573, .786]], //Z
[[.061, .569], [.115, .509], [.197, .566], [.256, .503]], //left ~
[[.738, .566], [.791, .506], [.872, .57], [.93, .503]]//right ~
]
//reassign canvas for use under 'with' below
c2 = c
onmousemove = function(e) {
    mouseX = e.pageX
    mouseY = e.pageY
}
onmousedown = function(e) {
    console.log(e.pageX / innerWidth + " " + e.pageY / innerHeight)
}
setInterval(function() {
    if (mouseX) {
        cWid = c.width = innerWidth - 21
        cHi = c.height = innerHeight - 21

        //with is amazing
        with (a) {
            with (Math) {
                rand = random

                //Align text so that it rotates cleanly
                textBaseline = 'middle'
                textAlign = 'center'
                shadowColor = '#222'
                if (!stopped) {

                    //after 5 seconds stop spawning flowers, after another 5 start flower attack
                    //setTimeout('stopped=1;setTimeout(\'killing=1\',2e3)', 2e3)
                    if (rand() > .6 && flowers.length < 2 && mouseX > 70 && innerWidth - mouseX > 70 && mouseY > 70 && innerHeight - mouseY > 70) {

                        //spawn flower
                        flow = rand() * 27 + 10025
                        dir = rand() * PI * 2
                        flower = {
                            x : mouseX,
                            y : mouseY,
                            dir : dir,
                            xSpeed : cos(dir),
                            ySpeed : sin(dir),
                            flower : String.fromCharCode(flow), //unicode flowers
                            rot : 0,
                            poptime : 30,
                            size : 90,
                            color : '#' + ['FA7A79', 'A266AC', 'E38F3D', '81A63F', '619CD8'][~~(rand() * 5)]
                        }
                        flowers.push(flower)
                    }
                }
                for (i in flowers) {
                    with (flowers[i]) {
                        dir = dir % (2 * PI)
                        if (x < 70 || x > cWid - 70) {
                            xSpeed *= -1
                            x += xSpeed * 14
                            if (x < 70)
                                x = 70
                            if (x > cWid - 70)
                                x = cWid - 70
                        }
                        if (y < 70 || y > cHi - 70) {
                            ySpeed *= -1
                            y += ySpeed * 14
                            if (y < 70)
                                y = 70
                            if (y > cHi - 70)
                                y = cHi - 70
                        }
                        x += xSpeed * 16
                        y += ySpeed * 16

                        for (var lett in letters) {
                            letter = letters[lett]

                            last = letter[0]

                            for (var j = 1; j < letter.length; j++) {
                                var x1 = cWid * last[0]
                                var y1 = cHi * last[1]
                                var x2 = cWid * letter[j][0]
                                var y2 = cHi * letter[j][1]
                                var m = (y1 - y2) / (x1 - x2)
                                var yy = m * (x - x1) + y1
                                if (!(x > max(x1, x2)) && !(x < min(x1, x2))) {
                                    if (abs(y - yy) < 10) {
                                        x -= xSpeed * 15.5
                                        y -= ySpeed * 15.5
                                        break
                                    }
                                }
                                last = letter[j]
                            }
                        }
                        rot += PI / 9
                        poptime -= 1
                        if (poptime < 0 && size && abs(x - mouseX) < size / 2 && abs(y - mouseY) < size / 2) {
                            size *= .9
                            poptime = 30
                            dir = rand() * PI * 2
                            xSpeed = cos(dir)
                            ySpeed = sin(dir)
                            for ( i = 0; i < 5; i++) {
                                dd = rand() * PI * 2
                                xx = mouseX + cos(dd) * 45
                                yy = mouseY + sin(dd) * 45
                                if (xx < 70)
                                    xx = 70
                                if (xx > cWid - 70)
                                    xx = cWid - 70
                                if (yy < 70)
                                    yy = 70
                                if (yy > cHi - 70)
                                    yy = cHi - 70

                                flowers.push({
                                    x : xx,
                                    y : yy,
                                    xSpeed : cos(dd),
                                    ySpeed : sin(dd),
                                    dir : dd,
                                    flower : String.fromCharCode(rand() * 27 + 10025), //unicode flowers
                                    rot : 0,
                                    state : 3,
                                    poptime : 30,
                                    size : size,
                                    color : '#' + ['FA7A79', 'A266AC', 'E38F3D', '81A63F', '619CD8'][~~(rand() * 5)]
                                })
                            }

                        }
                        x < 0 + 70 | x > cWid - 70 | y < 0 + 70 | y > cHi - 70 ? state = 1 : 0

                        //draw rotated flower
                        font = size + 'px sans'
                        shadowBlur = 3;
                        fillStyle = color
                        save()
                        ta(x, y)
                        rotate(rot)
                        fx(flower, 0, 0)
                        re()
                    }
                }
            }
            //fillStyle = '#DD0'
            //fx('\u2600', mouseX, mouseY)

        }
    }
}, 33)

