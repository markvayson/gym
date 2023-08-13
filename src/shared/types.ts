export enum SelectedPage {
  evofit = "Evofit",
  benefits = "Benefits",
  ourclasses = "Our Classes",
  contactus = "Contact Us",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
