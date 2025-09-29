"use client";

import * as React from "react";
import ContactCTA from "./contactCta";
import { Phone } from "lucide-react";

const DEFAULT_CONTACTS = [
  {
    id: 1,
    name: "Alex Johnson",
    description: "Account Manager",
    phone: "+1 (555) 123-4567",
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Priya Singh",
    description: "Customer Success",
    phone: "+1 (555) 987-6543",
    avatarUrl: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Diego Martinez",
    description: "Technical Support",
    phone: "+1 (555) 222-7788",
    avatarUrl: "/placeholder-user.jpg",
  },
];

const Call = ({
  className,
  buttonLabel = "Call",
  contacts = DEFAULT_CONTACTS,
  title = "Call a contact",
  subtitle = "Choose a person to call from the list below.",
}) => {
  const mapped = React.useMemo(
    () =>
      (contacts || []).map((c) => ({
        id: c.id,
        name: c.name,
        description: c.description,
        value: c.phone, // button shows number; description omits it
        avatarUrl: c.avatarUrl,
      })),
    [contacts]
  );

  return (
    <ContactCTA
      kind="call"
      className={className}
      buttonLabel={buttonLabel}
      title={title}
      subtitle={subtitle}
      contacts={mapped}
      icon={Phone}
    />
  );
};

export default Call;
