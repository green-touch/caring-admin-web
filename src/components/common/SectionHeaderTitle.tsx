import Title from './SectionTitle/Title';
import ActionButton from './SectionTitle/Button';

type SectionHeaderProps = {
  title: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

export default function SectionHeader({ title, buttonLabel, onButtonClick }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2">
      <Title text={title} />
      {buttonLabel && <ActionButton label={buttonLabel} onClick={onButtonClick} />}
    </div>
  );
}
