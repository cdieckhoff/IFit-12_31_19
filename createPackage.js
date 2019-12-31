function createPackage(small, big, goal) {
    // output the number of small bags needed
    // to ship the order
    let t = goal - (big * 5);
    return t < 0 ? -1 : t;
}