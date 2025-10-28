export interface Certificate {
  id: string
  title: string
  organization: string
  organizationLogo: string
  issueDate: string
  credentialId?: string
  skills: string[]
  certificateImage: string
  credentialUrl?: string
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "oracle-genai-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    organization: "Oracle",
    organizationLogo: "/images/certificates/logos/oracle.png",
    issueDate: "Septembre 2025",
    credentialId: "102390537OCI25GAIOCP",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLM)",
      "Fine Tuning",
      "Prompt Engineering",
    ],
    certificateImage: "/images/certificates/oracle-genai.jpg",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=048244AE45007060E0A700D864C78DD7B77B7C81E4D0B3FBFE538D440F09AD57",
  },
  {
    id: "tensorflow-deep-learning",
    title: "Certificate of completion - Deep Learning with TensorFlow 2",
    organization: "365 Data Science",
    organizationLogo: "/images/certificates/logos/365datascience.png",
    issueDate: "Novembre 2024",
    credentialId: "CC-E3D659EBFE",
    skills: ["TensorFlow", "Deep Learning"],
    certificateImage: "/images/certificates/tensorflow-deeplearning.jpg",
    credentialUrl: "https://learn.365datascience.com/certificates/CC-E3D659EBFE/",
  },
  {
    id: "python-data-structures",
    title: "Python Data Structures",
    organization: "University of Michigan",
    organizationLogo: "/images/certificates/logos/umichigan.png",
    issueDate: "Janvier 2024",
    credentialId: "Coursera A6CRWHNQ8WJ9",
    skills: ["Data Structures", "Python (Programming Language)"],
    certificateImage: "/images/certificates/python-datastructures.jpg",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/A6CRWHNQ8WJ9",
  },
  {
    id: "flutter-bootcamp",
    title: "Flutter Bootcamp",
    organization: "GDG Guelmim",
    organizationLogo: "/images/certificates/logos/gdg.png",
    issueDate: "Avril 2023",
    credentialId: "",
    skills: ["Flutter", "Dart"],
    certificateImage: "/images/certificates/flutter-bootcamp.jpg",
  },
]
