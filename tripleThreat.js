function tripleThreat(a) {
    // find 3 numbers in consecutive order
    // if found output 1 otherwise output 0
    let cnt = 1;
    let nxt = 0;
    let m = false;
    a.map(n => {
        if (nxt != 0) {
            if (n === nxt) {
                cnt++;
                if (cnt === 3) {
                    m = true;
                }
            } else {
                cnt = 1;
            }
        }
        nxt = n + 1;
    });
    return m ? 1 : 0;
}
