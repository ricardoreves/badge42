/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Cursus.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/10/17 19:07:33 by jaeskim           #+#    #+#             */
/*   Updated: 2020/10/17 19:13:21 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";

const Cursus = ({ cursusName }) => {
  return (
    <g data-testid="card-title" transform="translate(400, 35)">
      <g transform="translate(0, 0)">
        <text
          x="0"
          y="0"
          style={{
            font: "600 14px 'Arial', 'Segoe UI', Ubuntu, Sans-Serif",
            fill: "#fff",
          }}
        >
          {cursusName}!
        </text>
      </g>
    </g>
  );
};

export default Cursus;
