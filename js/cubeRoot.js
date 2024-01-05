class CubeRoot extends Root {
    static INDEX = 3;

    constructor(n) {
        super(n, CubeRoot.INDEX);
    }

    static get(n) {
        return Root.get(n, CubeRoot.INDEX);
    }
}