import React, { FC } from 'react'

interface Props {
  isActive: boolean;
}

const TURNED_OFF_OPACITY = '0.2'

export const DisplayCell: FC<Props> = ({ isActive }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
    <path stroke="#000" d="M.5.5h8v8h-8z" strokeOpacity={isActive ? '1' : TURNED_OFF_OPACITY} />
    <path fill="#000" d="M2 2h5v5H2z" fillOpacity={isActive ? '1' : TURNED_OFF_OPACITY} />
  </svg>
)
