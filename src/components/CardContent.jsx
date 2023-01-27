import { CardContent, Chip, Typography } from "@mui/material";



export default function Content({ title, firstName, lastName, publishDate, tags, text }) {
    return (
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {text}
        </Typography>
     
        <Typography variant="body2" color="textSecondary" component="p">
          {title}. {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created: {publishDate.split('T')[0]}
        </Typography>
        {tags.map((tag, i) => (
          <Chip key={i} label={tag} sx={{ margin: '8px' }} />
        ))}
      </CardContent>
    );
}