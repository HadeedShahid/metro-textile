"use client";

import * as React from "react";
import ContactCTA from "./contactCta";
import { MessageCircle } from "lucide-react";

const DEFAULT_CONTACTS = [
  {
    id: 1,
    name: "Alex Johnson",
    description: "Account Manager",
    number: "+1 (555) 123-4567",
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    description: "Customer Success",
    number: "+1 (555) 987-6543",
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Diego Martinez",
    description: "Technical Support",
    number: "+44 20 7946 0958",
    avatarUrl: "/placeholder-user.jpg",
  },
];

const Whatsapp = ({
  className,
  buttonLabel = "WhatsApp",
  contacts = DEFAULT_CONTACTS,
  title = "Message on WhatsApp",
  subtitle = "Choose a person to start a WhatsApp chat.",
}) => {
  const mapped = React.useMemo(
    () =>
      (contacts || []).map((c) => ({
        id: c.id,
        name: c.name,
        description: c.description,
        value: c.number, // show number inside the primary button; omit from description
        avatarUrl: c.avatarUrl,
      })),
    [contacts]
  );

  return (
    <ContactCTA
      kind="whatsapp"
      className={className}
      buttonLabel={buttonLabel}
      title={title}
      subtitle={subtitle}
      contacts={mapped}
      icon={MessageCircle}
    />
  );
};

export default Whatsapp;
