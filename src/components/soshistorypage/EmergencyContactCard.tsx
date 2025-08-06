interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
}

interface EmergencyContactCardProps {
  contacts: EmergencyContact[];
}

export default function EmergencyContactCard({ contacts }: EmergencyContactCardProps) {
  return (
    <div className="bg-white rounded-[8px] p-6 shadow-[4px_4px_8px_#00000005] w-full">
      <div className="text-[20px] font-bold text-gray100 mb-4">
        비상 연락망 <span className="text-[18px] text-gray70">{contacts.length}명</span>
      </div>
      <div className="flex flex-col gap-3 text-[18px] text-gray100">
        {contacts.map((contact, i) => (
          <div key={i} className="flex justify-between">
            <span>
              <span className="font-semibold ">{contact.name}</span>{' '}
              <span className="text-gray50 text-[16px]">{contact.relation}</span>
            </span>
            <span className="text-gray90 text-[16px]">{contact.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
