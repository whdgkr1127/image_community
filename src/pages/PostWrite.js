import React from 'react';
import {Grid, Text, Input, Image, Button} from "../elements"
import Upload from "../shared/Upload"
const PostWrite = () => {
    return(
        <React.Fragment>
            <Grid padding="16px">
                <Text size="36px" bold>게시글 작성</Text>
                <Upload/>
            </Grid>
            <Grid>
              <Grid padding="16px">
                  <Text size="24px" bold>미리보기</Text>
                  </Grid>  
                  <Image shape="rectangle"/>
            </Grid>
            <Grid padding="16px">
                <Input multiLine label="게시글 내용" placeholder="게시글 작성"/>
            </Grid>
            <Grid padding="16px">
                <Button>게시글 작성</Button>
            </Grid>
        </React.Fragment>
    )
}

export default PostWrite;
