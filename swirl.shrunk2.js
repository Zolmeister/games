/*
* description...
* By: Zolmeister
*/
//used variables
// a, b, c, d, f, g, i , l, m, p, q, r, s, t, w
for ($ in a)
a[$[0] + ($[6] || '')] = a[$]
var webkitURL
isKit = webkitURL
pre = isKit ? 'webkit' : 'moz'
requestFull = pre + 'RequestFull' + ( isKit ? 's' : 'S') + 'creen'
pointerLock = pre + 'RequestPointerLock'
//mouse = {
//    x : 0,
//    y : 0
//}
mouseX = killing = ind = stopped = mouseY = 0
types = []
flowers = []
c2 = c
blood = []
oneT = 120
math = Math
PI = PI
rand = math.random
onmousedown = function(e) {
    if (!mouseX) {
        c[requestFull] ? c[requestFull]() : 0
        mouseX = innerWidth / 2
        mouseY = innerHeight / 2
        onmousemove = function(e) {
            if (c[requestFull]) {
                c[pointerLock]();
                x = e[pre + 'MovementX']
                y = e[pre + 'MovementY']
                mouseX += !(mouseX + x > innerWidth - oneT | mouseX + x < oneT) ? x : 0
                mouseY += !(mouseY + y > innerHeight - oneT | mouseY + y < oneT) ? y : 0
            } else {
                mouseX = e.offsetX
                mouseY = e.offsetY
            }

        }
        setInterval(loop, 33)
    }
}
loop = function() {
    cWid = c.width = innerWidth - 21
    cHi = c.height = innerHeight - 21
    with (a) {
        font = ( isKit ? 90 : oneT) + 'px monospace'
        textBaseline = 'middle'
        textAlign = 'center'
        shadowColor = '#222'
        if (!stopped) {
            this.setTimeout('if(!stopped){stopped=1;setTimeout(\'killing=1\',7e3)}', 7e3)
            if (rand() > .6) {

                //spawn flower
                flow = rand() * 27 + 10025

                flower = {
                    x : mouseX,
                    y : mouseY,
                    dir : rand() * PI * 4 - PI / 2,
                    flower : String.fromCharCode(flow),
                    rot : 0,
                    state : 0,
                    color : '#' + ['FA7A79', 'A266AC', 'E38F3D', '81A63F', '619CD8'][~~(rand() * 5)]
                }
                flowers.push(flower)
            }
        }

        if (killing) {
            if (rand() > .7) {
                flower = flowers[ind++ % flowers.length]
                flower.state = 3
                flower.dir = math.atan2(mouseY - flower.y, mouseX - flower.x)//dir to mouse
            }
        }
        for (i in flowers) {
            flower = flowers[i]
            if (!flower.state) {
                flower.x += math.cos(flower.dir) * 7
                flower.y += math.sin(flower.dir) * 7
                flower.rot += PI / 25
                flower.x < 0 + 70 | flower.x > cWid - 70 | flower.y < 0 + 70 | flower.y > cHi - 70 ? flower.state = 1 : 0
            }
            if (flower.state == 3) {
                flower.x += math.cos(flower.dir) * 14
                flower.y += math.sin(flower.dir) * 14
                flower.rot += PI / 6
                if (math.abs(flower.x - mouseX) < 45 & math.abs(flower.y - mouseY) < 45) {
                    blood.push({
                        x : mouseX,
                        y : mouseY,
                        dir : flower.dir
                    })
                    blood.length > 100 ? blood.shift() : 0
                }
            }
            //draw flower
            shadowBlur = 3;
            fillStyle = flower.color
            save()
            ta(flower.x, flower.y)
            rotate(flower.rot)
            fx(flower.flower, 0, 0)
            re()
        }
        //draw blood
        for (i in blood) {
            drop = blood[i]
            ba()
            strokeStyle = '#B00'
            lineWidth = 2
            m(drop.x, drop.y)
            l(drop.x + math.cos(drop.dir) * 20, drop.y + math.sin(drop.dir) * 20)
            s()
        }
        fillStyle = '#000'
        c2[requestFull] ? fx('\u269A', mouseX, mouseY) : 0
    }
}
