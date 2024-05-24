import { BUTTON_TITLE_NAV1 } from "@/utils/content";

interface ButtonProps {
  text?: string;
  Icon?: any;
  onlyIcon?: boolean;
  iconClassName?: string;
  textClassName?: string;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text = "",
  Icon,
  onlyIcon,
  className = "",
  iconClassName = "",
  textClassName = "",
}) => {
  return (
    <button className={`font-medium ${className}`} title={text ? text : BUTTON_TITLE_NAV1}>
      <span className="w-full h-full flex justify-center items-center">
        {/* text */}
        {!onlyIcon && !Icon && <span className={`${textClassName}`}>{text}</span>}

        {/* icon */}
        {onlyIcon && Icon && <Icon className={`${iconClassName}`} />}

        {/* text and icon */}
        {Icon && text && !onlyIcon && (
          <>
            <p className={`${textClassName}`}>{text}</p>
            <Icon className={`${iconClassName}`} />
          </>
        )}
      </span>
    </button>
  );
};

export default CustomButton;
