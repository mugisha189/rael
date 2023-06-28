import Member, { MemberProps } from "@/app/members/[id]/member";
import Modal from "@/components/shared/Modal";
import { Metadata } from "next";

interface MemberModalPageProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Nick Singizwa - Overview",
};

export default async function MemberModal({ params }: MemberModalPageProps) {
  const id = params?.id;
  // if (!id) return;
  const data: MemberProps["data"] = {
    name: "Nick Singizwa",
    desc: "Mizero Nick was part  of the class of 2023 tht graduated  from Rwanda Coding Academy in August 2023 after a three academic year. He and his classmates joined RCA in January 2 020 . During his time at RCA, he played football and became the first captain to take the school team outside for a finals game against Nyabirasi in June 2023 .  He also was  a member of the RTB TEAM in 2022-2023 that helped build the TVET Management Portal .",
    title: "Member of class of 2023",
    image: "/images/member.png",
    bio: "Football Captain",
    images: new Array<string>(4).fill("").map((it, i) => `/images/mem${i}`),
  };

  return (
    <Modal>
      <Member data={data} />
    </Modal>
  );
}
