import MainButtonLabel from "@/components/buttons/MainButtonLabel";
import SectionTitle from "@/components/display elements/SectionTitle";
import Image from "next/image";

export default function PricePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionTitle label="Tarifs"/>
      <Image alt="image" src={"/images/image1.jpeg"} width={500} height={500} className="aspect-square"/>
      <p className="text-body">Donec libero. Quisque vitae est quis dui  bibendum suscipit. Fusce leo felis, sagittis non, vehicula ac,  ultricies vitae, diam. Aenean congue libero et metus. Nulla  convallis libero a lacus. Donec hendrerit lorem sit amet leo. Mauris  libero. Pellentesque pulvinar molestie dolor. Proin nibh mauris,  ornare at, pretium sit amet, porttitor vel, mi. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames ac  turpis egestas.</p>
      <button><MainButtonLabel label="prendre rendez-vous"/></button>
    </main>
  );
}