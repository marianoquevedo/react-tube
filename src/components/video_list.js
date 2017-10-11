import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {

    constructor(props) {

        super(props);
    }
    
    render() {

        const items = this.props.videos.map((video) => {
            return <VideoListItem 
                        onVideoSelect={this.props.onVideoSelect}
                        key={video.id.videoId} 
                        video={video} />;
        });

        return (
            <ul className="col-md-4 list-group">
                {items}
            </ul>
        );
    }
}

export default VideoList;