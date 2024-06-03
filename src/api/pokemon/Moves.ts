// Note: This probably fails, but won't use for now

export type TMoves = {
    move: {
        name: string;
        url: string;
    }
    version_group_details: {
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        }
        version_group: {
            name: string;
            url: string;
        }
    }[]
}