module.exports = {
    findByMid(mid, options = {}) {
        return this.findOne({
            ...options,
            where: { mid }
        });
    },
    findByPid(pid, options = {}) {
        return this.findOne({
            ...options,
            where: { pid }
        });
    }
}