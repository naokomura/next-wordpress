type SvgIconProps = {
  title: string
}

export const IconDescription = ({ title }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </svg>
  )
}

export const IconOpenInNew = ({ title }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  )
}

export const IconGitHub = ({ title }: SvgIconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 0C5.59816 0 0 5.50943 0 12.3019C0 17.7359 3.6043 22.3396 8.51227 24C9.12577 24.0755 9.35583 23.6981 9.35583 23.3962C9.35583 23.0943 9.35583 22.3396 9.35583 21.283C5.90491 22.0377 5.13804 19.6226 5.13804 19.6226C4.60123 18.1887 3.75767 17.8113 3.75767 17.8113C2.60736 17.0566 3.83436 17.0566 3.83436 17.0566C5.06135 17.1321 5.75153 18.3396 5.75153 18.3396C6.90184 20.2264 8.66565 19.6981 9.35583 19.3962C9.43252 18.566 9.81595 18.0377 10.1227 17.7359C7.36196 17.434 4.44785 16.3774 4.44785 11.6226C4.44785 10.2642 4.90798 9.20755 5.75153 8.30189C5.67485 8.07547 5.21472 6.79245 5.90491 5.13208C5.90491 5.13208 6.97853 4.83019 9.35583 6.41509C10.3528 6.11321 11.4264 6.03774 12.5 6.03774C13.5736 6.03774 14.6472 6.18868 15.6442 6.41509C18.0215 4.83019 19.0951 5.13208 19.0951 5.13208C19.7853 6.79245 19.3252 8.07547 19.2485 8.37736C20.0153 9.20755 20.5521 10.3396 20.5521 11.6981C20.5521 16.4528 17.638 17.434 14.8773 17.7359C15.3374 18.1132 15.7209 18.8679 15.7209 20C15.7209 21.6604 15.7209 22.9434 15.7209 23.3962C15.7209 23.6981 15.9509 24.0755 16.5644 24C21.5491 22.3396 25.0767 17.7359 25.0767 12.3019C25 5.50943 19.4018 0 12.5 0Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="25" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const IconNote = ({ title }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.948 16.668H8.06398L8.05198 9.76801C8.05198 9.69601 8.07598 9.62401 8.11198 9.58801C8.32512 9.3555 8.53825 9.12174 8.75179 8.88753C9.1995 8.39649 9.64899 7.9035 10.104 7.41601C10.14 7.38001 10.212 7.34401 10.248 7.34401H15.948V16.668ZM8.99998 10.62C8.99998 10.968 9.28798 11.256 9.63598 11.256V11.244H11.34C11.688 11.244 11.976 10.956 11.976 10.608V8.90401C11.976 8.55601 11.688 8.26801 11.34 8.26801C10.992 8.26801 10.704 8.55601 10.704 8.90401V9.98401H9.63598C9.28798 9.98401 8.99998 10.272 8.99998 10.62Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H24V24H0V0ZM17.52 6.55201C17.52 6.12001 17.16 5.76001 16.728 5.76001V5.77201H9.91198C9.61198 5.77201 9.37198 5.86801 9.16798 6.09601L6.79198 8.68801C6.57598 8.91601 6.47998 9.16801 6.47998 9.48001V17.46C6.47998 17.892 6.83998 18.252 7.27198 18.252H16.728C17.172 18.252 17.52 17.892 17.52 17.46V6.55201Z"
        fill="black"
      />
    </svg>
  )
}

export const IconTwitter = ({ title }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H24V24H0V0ZM17.97 9.34205C17.97 13.4041 14.874 18.0961 9.21598 18.0961C7.48198 18.0961 5.86198 17.5861 4.50598 16.7221C4.74598 16.7521 4.99198 16.7641 5.23798 16.7641C6.67798 16.7641 8.00398 16.2721 9.05998 15.4441C7.71598 15.4201 6.57598 14.5321 6.18598 13.3081C6.37198 13.3441 6.56398 13.3621 6.76198 13.3621C7.04398 13.3621 7.31398 13.3261 7.57198 13.2541C6.16798 12.9721 5.10598 11.7241 5.10598 10.2361V10.1941C5.51998 10.4221 5.99398 10.5601 6.49798 10.5781C5.67598 10.0261 5.12998 9.08405 5.12998 8.01605C5.12998 7.45205 5.27998 6.92405 5.54398 6.46805C7.06198 8.32805 9.32998 9.55805 11.886 9.68405C11.838 9.45605 11.808 9.22205 11.808 8.98205C11.808 7.28405 13.188 5.90405 14.886 5.90405C15.768 5.90405 16.566 6.27605 17.13 6.87605C17.832 6.73805 18.492 6.48605 19.086 6.13205C18.852 6.85205 18.366 7.45805 17.73 7.83605C18.354 7.75805 18.948 7.59605 19.5 7.35005C19.086 7.96805 18.564 8.51405 17.964 8.94605C17.97 9.07805 17.97 9.21005 17.97 9.34205Z"
        fill="black"
      />
    </svg>
  )
}

export const IconTwitterSolid = ({ title }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M7.64042 21.5423C16.4971 21.5423 21.3434 14.1978 21.3434 7.83938C21.3434 7.63276 21.3434 7.42613 21.334 7.21951C22.2732 6.54329 23.0903 5.68861 23.7383 4.72124C22.8742 5.10631 21.9444 5.35989 20.9677 5.48199C21.9632 4.89029 22.724 3.9417 23.0903 2.81466C22.1605 3.36879 21.1273 3.76325 20.0285 3.97927C19.1456 3.04007 17.8965 2.45776 16.5159 2.45776C13.8579 2.45776 11.6978 4.61792 11.6978 7.27586C11.6978 7.65154 11.7447 8.01783 11.8199 8.37472C7.81887 8.17749 4.26869 6.25213 1.89252 3.34061C1.47927 4.0544 1.24447 4.8809 1.24447 5.76375C1.24447 7.43553 2.09914 8.91007 3.38585 9.77413C2.59692 9.74596 1.85495 9.52994 1.2069 9.17304C1.2069 9.19183 1.2069 9.21061 1.2069 9.23879C1.2069 11.568 2.86928 13.5215 5.06701 13.963C4.66316 14.0757 4.24052 14.132 3.79909 14.132C3.48916 14.132 3.18861 14.1038 2.89746 14.0475C3.50794 15.9635 5.29242 17.3535 7.39623 17.391C5.74324 18.6871 3.66761 19.4573 1.41352 19.4573C1.02845 19.4573 0.64338 19.4385 0.2677 19.3915C2.39029 20.744 4.92613 21.5423 7.64042 21.5423Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const IconShare = ({ title }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
    </svg>
  )
}
