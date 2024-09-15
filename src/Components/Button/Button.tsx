import './Button.css'

const hamburgerSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
    <g fill="#D0D6F9" fillRule="evenodd">
      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
    </g>
  </svg>;

const closeSVG = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
    <g fill="#D0D6F9" fillRule="evenodd">
      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
    </g>
  </svg>;

export default function Button({
  children = '',
  hamburger = false,
  active = false,
  onClick,
  ...props
}: {
  children?: React.ReactNode | string;
  hamburger?: boolean;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  props?: React.ComponentProps<'button'>;
}) {
  return (
    <>
      <button
        className={`button${hamburger ? ' button_appearance_hamburger' : ''}`}
        type="button"
        onClick={onClick}
        {...props}
      >
        {hamburger ? (active ? closeSVG : hamburgerSVG) : children}
      </button>
    </>
  )
}
