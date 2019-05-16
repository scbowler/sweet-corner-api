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
    },
    findByUid(userId, options = {}) {
        return this.findOne({
            ...options,
            where: { userId }
        });
    },
    findActiveByUid(cartStatuses) {
        return async function(userId, options = {}) {
            const { id: statusId = null } = await cartStatuses.findByMid('active') || {};

            if(!statusId) return null;

            return this.findOne({
                ...options,
                where: { statusId, userId },
                order: [['updatedAt', 'DESC']]
            });
        }
    }
}
