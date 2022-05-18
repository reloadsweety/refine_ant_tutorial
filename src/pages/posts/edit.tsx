import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost } from "interfaces";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import {
    Edit,
    Form,
    Input,
    Select,
    useForm,
    useSelect
} from "@pankod/refine-antd";

export const PostEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<IPost>({
        warnWhenUnsavedChanges: true,
    });

    const { selectProps: categorySelectProps } = useSelect<IPost>({
        resource: "categories",
        defaultValue: queryResult?.data?.data?.category.id,
    });

    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    // const statusOptions = IPost.statusChoices

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                    <Select
                        options={[
                            {
                                label: "Published",
                                value: "published",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                            {
                                label: "Rejected",
                                value: "rejected",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Category" name={["category", "id"]} rules={[{ required: true }]}>
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item label="Content" name="content" rules={[{ required: true }]}>
                    <ReactMde
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(
                                <ReactMarkdown>{markdown}</ReactMarkdown>,
                            )
                        }
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};