import React from 'react';
import { TextField, Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const NewOrderTable = () => {

return (
  <>
    <Box
      component="form"
      autoComplete="off"
      sx={{
        padding: {
          xs: '1.688rem 0.625rem',
          md: '2.5rem 2.375rem',
          lg: '2.5rem 2.375rem',
        },
        margin: {
          lg: '6.25rem 3.063rem',
          md: '6.25rem 3.063rem',
          xs: '4.375rem 0 3.125rem 0',
        },
        background: 'rgba(255, 118, 0, 0.2)',
        borderRadius: '1.875rem',
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{ fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' } }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 9, md: 10, lg: 17.5 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            {' '}
            Блогер
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Рекламодатель
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 7.5, lg: 15 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Профиль
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Финансы
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Заказы
          </Link>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Link>Изменить профиль</Link>
        </Grid>
      </Grid>

      <Grid
        container
        xs={6}
        md={12}
        gap={2}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: { xs: 9.6, md: 14.5, lg: 14.5 },
          }}
        >
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
            }}
          >
            № заказа
          </Typography>
          <TextField
            id="ordernum-input"
            type="text"
            size="small"
            width="100%"
            fullWidth
            InputProps={{
              style: {
                borderRadius: '30px',
                border: '1px solid rgba(240, 158, 86, 0.58)',
                minWidth: '88px',
                maxWidth: '177px',
              },
            }}
          />
        </Grid>
        {/* {width:{xs:'5.5rem', md:'11.063rem', lg:'11.063rem'}, height:{xs:'1.25rem',md:'1.875rem', lg:'1.875' */}
        <Grid container xs={6} md={12} lg={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 10.5, md: 16.1, lg: 16.1 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
               Компания
            </Typography>

            <TextField
              id="company-input"
              type="text"
              size="small"
              width="100%"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
               Регион
            </Typography>

            <TextField
              id="region-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
               Срок исполнения
            </Typography>

            <TextField
              id="duetodate-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
               Задание
            </Typography>

            <TextField
              id="email-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
             Фото
            </Typography>

            <TextField
              id="pic-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
              
              Видео
            </Typography>

            <TextField
              id="video-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
          <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
              
              Cоцсети
            </Typography>

            <TextField
              id="socialnetwork-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
              Сумма, руб.
              
            </Typography>

            <TextField
              id="sum-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
          </Grid>
          <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
              Кол-во блогеров
              
            </Typography>

            <TextField
              id="bloggers-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
          </Grid>
          <Grid container xs={6} md={12} sx={{ alignItems: 'center' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: { xs: 7, md: 11, lg: 11 },
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
              }}
            >
              Охват
              
            </Typography>

            <TextField
              id="amount-input"
              type="text"
              size="small"
              width="100%"
              InputProps={{
                style: {
                  borderRadius: '30px',
                  border: '1px solid rgba(240, 158, 86, 0.58)',
                  minWidth: '88px',
                  maxWidth: '177px',
                },
              }}
            />
          </Grid>
          </Grid>
          

        <Grid item xs={12} gap={3} sx={{ display: 'flex' }}>
            <Button className="styledBtn">Разместить заказ</Button>
            <button className="styledBtn">Выбрать блогеров</button>
          </Grid>
      </Grid>
      </Grid>
    </Box>
  </>
);
};


export default NewOrderTable;
