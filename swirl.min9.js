/*
* By: Zolmeister
* http://zolmeister.com
*/
//used
//X,Y,M,A,B,D,E,F,G,H, J, K, L, M, N,O,P, R,T,U,V,W, I
X = Y = 0
D = []
//~ Z ~
G = [[.358, .163], [.642, .16], [.351, .733], [.649, .73]]//Z

//reassign canvas for use under "with" below
onmousemove = function(e) {
    X = e.pageX
    Y = e.pageY
}
K = c.height = innerHeight - 21
setInterval(function() {
    if (X) {
        J = c.width = innerWidth - 21

        //with is amazing
        with (a) {
            with (Math) {
                M = random

                //Align text so that it Oates cleanly
                textBaseline = "middle"
                textAlign = "center"
                shadowColor = "#222"

                if (M() > .6 & D.length < 2) {

                    //spawn E
                    N=M() * PI * 2
                    D.push({
                        x : X,
                        y : Y,
                        N : N,
                        A : cos(N),
                        B : sin(N),
                        E : String.fromCharCode(M() * 27 + 10025), //unicode D
                        O : 0,
                        F : 20,
                        H : 90,
                        I : "#" + ["FA7A79", "A266AC", "E38F3D", "81A63F", "619CD8"][~~(M() * 5)]
                    })
                }
                for (i in D) {
                    with (D[i]) {
                        N %= 2 * PI
                        if (x < 70 | x > J - 70) {
                            A *= -1
                            if (x < 70)
                                x = 70
                            if (x > J - 70)
                                x = J - 70
                        }
                        if (y < 70 | y > K - 70) {
                            B *= -1
                            if (y < 70)
                                y = 70
                            if (y > K - 70)
                                y = K - 70
                        }
                        x += A * 16
                        y += B * 16

                        P = G[0]

                        for ( j = 1; j < 4; j++) {
                            T = J * P[0]
                            V = K * P[1]
                            U = J * G[j][0]
                            W = K * G[j][1]
                            R = (V - W) / (T - U) * (x - T) + V
                            if (x < max(T, U) & x > min(T, U)) {
                                if (abs(y - R) < 10) {
                                    x -= A * 15.9
                                    y -= B * 15.9
                                    j=4
                                }
                            }
                            P = G[j]
                        }
                        O += PI / 9
                        F -= 1
                        if (D.length < 150 & F < 0 && H && abs(x - X) < H / 2 & abs(y - Y) < H / 2) {
                            H *= .9
                            F = 30
                            N = M() * PI * 2
                            A = cos(N)
                            B = sin(N)
                            for ( i = 0; i < 10; i++) {
                                dd = M() * PI * 2
                                L = X + cos(dd) * 45
                                R = Y + sin(dd) * 45

                                D.push({
                                    x : L,
                                    y : R,
                                    A : cos(dd),
                                    B : sin(dd),
                                    N : dd,
                                    E : String.fromCharCode(M() * 27 + 10025), //unicode D
                                    O : 0,
                                    F : 20,
                                    H : H,
                                    I : "#" + ["FA7A79", "A266AC", "E38F3D", "81A63F", "619CD8"][~~(M() * 5)]
                                })
                            }

                        }

                        //draw roated E
                        font = H + "px sans"
                        shadowBlur = 3;
                        fillStyle = I
                        save()
                        translate(x, y)
                        rotate(O)
                        fillText(E, 0, 0)
                        restore()
                    }
                }
            }
        }
    }
}, 33)

