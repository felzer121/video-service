import React from 'react';
import { PageWrapper } from '../../components/PageWrapper/ui';
import { Message } from '../../process/message/ui';

const MessagePage = () => {
    return (
        <>
            <PageWrapper>
                <Message />
            </PageWrapper>
        </>
    );
};

export default MessagePage;