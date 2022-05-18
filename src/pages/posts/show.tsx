import { ICategory, IPost } from "interfaces";

import { MarkdownField, Show, Tag, Typography } from "@pankod/refine-antd";
import { useOne, useShow } from "@pankod/refine-core";

const { Title, Text } = Typography;

export const PostShow = () => {
    const { queryResult } = useShow<IPost>();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    const { data: categoryData } = useOne<ICategory>({
        resource: "categories",
        id: record?.category.id || "",
        queryOptions: {
            enabled: !!record?.category.id,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>

            <Title level={5}>Status</Title>
            <Text>
                <Tag>{record?.status}</Tag>
            </Text>

            <Title level={5}>Category</Title>
            <Text>{categoryData?.data.title}</Text>

            <Title level={5}>Content</Title>
            <MarkdownField value={record?.content} />
        </Show>
    );
};