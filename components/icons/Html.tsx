type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const Html = ({ width = 24, height = 24, color = 'black' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16">
      <path fill={color} d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z" />
      <path
        fill="#FAFAFA"
        d="M12.235 4.709h-6.71l.16 1.809h6.39l-.481 5.424L8 12.945l-.003.001-3.592-1.004-.251-2.837h1.76l.131 1.472 1.953.531.002-.001 1.955-.531.204-2.291H4.082l-.474-5.341h8.783z"
      />
    </svg>
  );
};

export default Html;
