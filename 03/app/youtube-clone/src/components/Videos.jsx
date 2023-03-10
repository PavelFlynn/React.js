import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

export default function Videos(props) {

    const loopProps = props.videos;

    if (!loopProps?.length) return 'Loading...';

    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >

            {loopProps.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}

        </Stack>
    )
    
}
