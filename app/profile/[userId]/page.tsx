import { User } from "@/types/user"
import { headers } from "next/headers";

type ProfilePageProps = {
    params: {
        userId: User['id'];
    }
}
export default function ProfilePage(props: ProfilePageProps) {
    const { params } = props
    return <div>hello, {params.userId}</div>
}