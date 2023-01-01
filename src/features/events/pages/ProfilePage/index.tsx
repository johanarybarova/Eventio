import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Routes } from "~/features/core/constants/routes";
import { EventsList } from "~/features/events/components/EventsList";
import { Container } from "~/features/ui/components/Container";
import { LayoutIn } from "~/features/ui/components/LayoutIn";
import { ScreenReaderOnly } from "~/features/ui/components/ScreenReaderOnly";

import { ProfileCard, ProfileCircle } from "./styled";

export const DashboardPage: NextPage = () => {
  const { pathname } = useRouter();
  let isProfile: boolean = pathname === Routes.PROFILE;

  return (
    <LayoutIn>
      <Container>
        <h1 className={ScreenReaderOnly()}>Profile</h1>
        <section>
          <ProfileCircle />
          <ProfileCard />
          <EventsList isProfile={isProfile} />
        </section>
      </Container>
    </LayoutIn>
  );
};
