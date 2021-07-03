import React from 'react';
// import Grid from '../elements/Grid';
// import Image from '../elements/Image';
// import Text from '../elements/Text';
import {Grid, Image, Text} from '../elements';
const Post = (props) => {
    
    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image  src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


Post.defaultProps = {//필요한 props를 미리 넘겨 주는것
    user_info:{
        user_name:"mean0",
        user_profile:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MThfMTUz%2FMDAxNjE4NzQwOTUxMjA1.DuFAjU5RnYZ4sWZgzbtTwDZbuYGQiYWgacB2Zyiicr8g.ZhofIlad0ekxVXbD9UYhrVDYUm_PQolitqKbHsYtpyog.JPEG.wjdthdus712%2FIMG_8727.jpg&type=sc960_832"
    },
    image_url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MThfMTUz%2FMDAxNjE4NzQwOTUxMjA1.DuFAjU5RnYZ4sWZgzbtTwDZbuYGQiYWgacB2Zyiicr8g.ZhofIlad0ekxVXbD9UYhrVDYUm_PQolitqKbHsYtpyog.JPEG.wjdthdus712%2FIMG_8727.jpg&type=sc960_832",
    contents:"강아지네요!",
    comment_cnt: 10,
    insert_dt: "2021-07-02"
}


export default Post;