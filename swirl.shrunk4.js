/*
* By: Zolmeister
* http://zolmeister.com
*/

//thanks @marijnjh for http://js1k.com/2010-first/demo/635
for ($ in a)
a[$[0] + ($[6] || '')] = a[$]

//Fullscreen API because I can.
//detect if webkit or not
var webkitURL
isKit = webkitURL
pre = isKit ? 'webkit' : 'moz'

//Mozilla mispelled Fullscreen as FullScreen...
requestFull = pre + 'RequestFull' + ( isKit ? 's' : 'S') + 'creen'
pointerLock = pre + 'RequestPointerLock'
mouseX = killing = ind = stopped = mouseY = 0
flowers = []

//reassign canvas for use under 'with' below
c2 = c
onmousedown = function(e) {
    if (!mouseX) {
        c[requestFull] ? c[requestFull]() : 0
        mouseX = innerWidth / 2
        mouseY = innerHeight / 2
        onmousemove = function(e) {

            //If the browser supports the full screen API
            if (c[requestFull]) {

                //must be called here to make the pointer lock actually trigger
                c[pointerLock]()
                x = e[pre + 'MovementX']
                y = e[pre + 'MovementY']
                mouseX += !(mouseX + x > innerWidth - 120 | mouseX + x < 120) ? x : 0
                mouseY += !(mouseY + y > innerHeight - 120 | mouseY + y < 120) ? y : 0
            } else {

                //Opera support
                mouseX = e.offsetX
                mouseY = e.offsetY
            }

        }
        setInterval(function() {
            cWid = c.width = innerWidth - 21
            cHi = c.height = innerHeight - 21

            //with is amazing
            with (a) {
                with (Math) {
                    rand = random
                    font = '90px sans'

                    //Align text so that it rotates cleanly
                    textBaseline = 'middle'
                    textAlign = 'center'
                    shadowColor = '#222'
                    if (!stopped) {

                        //after 5 seconds stop spawning flowers, after another 5 start flower attack
                        setTimeout('stopped=1;setTimeout(\'killing=1\',5e3)', 5e3)
                        if (rand() > .6) {

                            //spawn flower
                            flow = rand() * 27 + 10025

                            flower = {
                                x : mouseX,
                                y : mouseY,
                                dir : rand() * PI * 4 - PI / 2,
                                flower : String.fromCharCode(flow), //unicode flowers
                                rot : 0,
                                state : 0,
                                color : '#' + ['FA7A79', 'A266AC', 'E38F3D', '81A63F', '619CD8'][~~(rand() * 5)]
                            }
                            flowers.push(flower)
                        }
                    }

                    if (killing) {
                        if (rand() > .7) {
                            with (flowers[ind++ % flowers.length]) {
                                state = 3

                                //direction to mouse
                                dir = atan2(mouseY - y, mouseX - x)
                            }
                        }
                    }
                    for (i in flowers) {
                        with (flowers[i]) {
                            if (!state) {
                                x += cos(dir) * 7
                                y += sin(dir) * 7
                                rot += PI / 25
                                x < 0 + 70 | x > cWid - 70 | y < 0 + 70 | y > cHi - 70 ? state = 1 : 0
                            }
                            if (state == 3) {
                                x += cos(dir) * 14
                                y += sin(dir) * 14
                                rot += PI / 6
                            }

                            //draw rotated flower
                            shadowBlur = 3;
                            fillStyle = color
                            save()
                            ta(x, y)
                            rotate(rot)
                            fx(flower, 0, 0)
                            re()
                        }
                    }
                    fillStyle = '#DD0'
                    fx('\u2600', mouseX, mouseY)
                }
            }
        }, 33)
    }
}
