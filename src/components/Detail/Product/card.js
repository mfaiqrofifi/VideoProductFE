import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function CardProduct({url,name,price}) {
  function formatNumberToCurrency(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  }
  return (
    <Card 
    sx={{ minHeight: '280px'}}
    style={{width:'80%'}}
    >
      <CardCover>
        <img
          src={url}
          srcSet={url+"&dpr=2 2x"}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff" mb={1}>
          {name}
        </Typography>
        <Typography
          startDecorator={<MonetizationOnIcon style={{color:'gold'}} />}
          textColor="neutral.300"
        >
            {formatNumberToCurrency(price)},00
        </Typography>
      </CardContent>
    </Card>
  );
}