import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 12
    },
    item: {
        borderWidth: 1,
        borderColor: COLORS.gray4,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15
    },
    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4
    },
    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1
    }
}