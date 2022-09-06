

for (let i = 0; i < 7; i++){
    for (let j = 0; j < 4.5; j++){
        if (j == 0 || j == i + 1 || i + j == 7/2+2 || i == ( j+ 7/2)){
            document.write(" X")
        } else {
            document.write(" &nbsp ")
        }
    }

    document.write("<br/>")
}