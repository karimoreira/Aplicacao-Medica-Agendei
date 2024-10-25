import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    doctor: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 6
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 8
    }
}