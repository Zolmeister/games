//used variables
// a, b, c, d, f, g, i , l, m, p, q, r, s, t, w
//A, B, C, X, Y, D, E, F, G, H, I, 120, K, L, M, N, O, P, Q, R, S, T, W, Z, U, V
for ($ in a)
a[$[0] + ($[6] || "")] = a[$]
var webkitURL
A = "Request"
z = webkitURL
B = z ? "webkit" : "moz"
C = B + A + "Full" + ( z ? "s" : "S") + "creen"
X = Y = D = K = F = 0
G = []
H = c
onmousedown = function(e) {
    if (!X) {
        c[C] ? c[C]() : 0
        j = X = innerWidth / 2
        x = Y = innerHeight / 2
        onmousemove = function(e) {
            if (c[C]) {
                c[B + A + "PointerLock"]()
                W = e[B + "MovementX"]
                Z = e[B + "MovementY"]
                X += !(X + W > j - 120 | X + W < 120) ? W : 0
                Y += !(Y + Z > x - 120 | Y + Z < 120) ? Z : 0
            } else {
                X = e.offsetX
                Y = e.offsetY
            }

        }
        setInterval(function(e) {
            j = innerWidth
            x = innerHeight
            U = c.width = j - 21
            V = c.height = x - 21
            c.style.background="#FFF"
            with (a) {
                with (Math) {
                    M = random
                    font = "90px sans"
                    textBaseline = "middle"
                    textAlign = "center"
                    shadowColor = "#666"
                    if (!F) {
                        setTimeout("F=1;setTimeout(\"D=1\",5e3)", 5e3)
                        if (M() > .6) {

                            //spawn S
                            G.push({
                                x : X,
                                y : Y,
                                N : M() * PI * 4 - PI / 2,
                                P : String.fromCharCode(M() * 27 + 10025),
                                O : 0,
                                Q : 0,
                                R : "#" + ["FA7A79", "A266AC", "E38F3D", "81A63F", "619CD8"][~~(M() * 5)]
                            })
                        }
                    }

                    if (D) {
                        if (M() > .7) {
                            with (G[K++ % G.length]) {
                                Q = 3
                                N = atan2(Y - y, X - x)//N to mouse
                            }
                        }
                    }
                    for (W in G) {
                        with (G[W]) {
                            if (!Q) {
                                x += cos(N) * 7
                                y += sin(N) * 7
                                O += PI / 25
                                x < 0 + 70 | x > U - 70 | y < 0 + 70 | y > V - 70 ? Q = 1 : 0
                            }
                            if (Q == 3) {
                                x += cos(N) * 14
                                y += sin(N) * 14
                                O += PI / 6
                            }

                            //draw S
                            shadowBlur = 3
                            fillStyle = R
                            save()
                            ta(x, y)
                            rotate(O)
                            fx(P, 0, 0)
                            re()
                        }
                    }
                    fillStyle = "#B00"
                    fx("\u269A", X, Y)
                }
            }
        }, 33)
    }
}
