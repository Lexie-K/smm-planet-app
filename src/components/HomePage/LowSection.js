import { Typography } from '@mui/material';
import React from 'react';

const LowSection = () => {
  return (
    <section className="styledfooterContainerPoints">
      <section>
        <Typography
          sx={{ fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' } }}
        >
          <p>Охват</p>
          <p>81 358 879</p>
        </Typography>
      </section>
      <section>
        <Typography sx={{ fontSize: { xs: '0.75rem', md: '1.125rem' } }}>
          <p>Блогеров</p>
          <p>542</p>
        </Typography>
      </section>
      <section>
        <Typography sx={{ fontSize: { xs: '0.75rem', md: '1.125rem' } }}>
          <p>Постов</p>
          <p>7 236</p>
        </Typography>
      </section>
    </section>
  );
};

export default LowSection;
