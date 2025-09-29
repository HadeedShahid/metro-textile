"use client";
import React from "react";
import ContactCTA from "./contactCta";
import { Mail } from "lucide-react";

const DEFAULT_CONTACTS = [
  {
    id: 1,
    name: "Alex Johnson",
    description: "Account Manager",
    email: "alex@example.com",
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    description: "Customer Success",
    email: "priya@example.com",
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Diego Martinez",
    description: "Technical Support",
    email: "diego@example.com",
    avatarUrl: "/placeholder-user.jpg",
  },
];

const Email = ({
  className,
  buttonLabel = "Email",
  contacts = DEFAULT_CONTACTS,
  title = "Email a contact",
  subtitle = "Choose a person to email from the list below.",
}) => {
  const mapped = React.useMemo(
    () =>
      (contacts || []).map((c) => ({
        id: c.id,
        name: c.name,
        description: c.description,
        value: c.email, // show email inside the primary button; omit from description
        avatarUrl: c.avatarUrl,
      })),
    [contacts]
  );

  return (
    <ContactCTA
      kind="email"
      className={className}
      buttonLabel={buttonLabel}
      title={title}
      subtitle={subtitle}
      contacts={mapped}
      icon={Mail}
    />
  );
};

export default Email;
