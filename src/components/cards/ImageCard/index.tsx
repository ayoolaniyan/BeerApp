import { Button, CardContent, CardActions, Card } from "@mui/material"
import LocalBarIcon from '@mui/icons-material/LocalBar';

const ImageCard = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <LocalBarIcon></LocalBarIcon>
                </CardContent>
            </Card>
        </div>
    );
}

export default ImageCard;