import React from 'react';
import '@ebay/skin/button';

var htmlContent = require('../static/pages/ebay.html');
/// add clock // add left particaptes

export default function Test() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
