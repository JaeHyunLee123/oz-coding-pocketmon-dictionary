/**
 * @typedef {Object} MagnifyingGlassProps
 * @property {string} fill
 * @property {string} className
 */

/**
 *
 * @param {MagnifyingGlassProps} props
 */

export default function MagnifyingGlass({ fill = "none", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`size-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
