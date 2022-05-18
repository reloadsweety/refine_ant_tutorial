import { ICategory, IPost } from "interfaces";

import {
    Button,
    CreateButton,
    DateField,
    DeleteButton,
    EditButton,
    FilterDropdown,
    List,
    Select,
    ShowButton,
    Space,
    Table,
    TagField,
    TextField,
    useSelect,
    useTable
} from "@pankod/refine-antd";
import {
    getDefaultFilter,
    useMany,
    useNavigation,
    usePermissions
} from "@pankod/refine-core";

export const PostList: React.FC = () => {
    const { tableProps, filters } = useTable<IPost>(
        {
            initialFilter: [
                {
                    field: "category.id",
                    // value: [1, 2],
                    value: [],
                    operator: "in",
                },
            ],
        }
    );

    const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];

    const { data: categoriesData, isLoading } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        // optionLabel: "title",
        // optionValue: "id",
        defaultValue: getDefaultFilter("category.id", filters, "in"),
    });

    const { data: permissionsData } = usePermissions();

    const { push } = useNavigation();

    return (
        <List 
            canCreate={permissionsData?.includes("admin")}
            pageHeaderProps={{
                extra: (
                    <Space>
                        <Button onClick={() => push("/dashboard")}>
                            Dashboard Custom Route
                        </Button>
                        <CreateButton />
                    </Space>
                ),
            }}
        >
            <Table {...tableProps} rowKey="id">
                <Table.Column<IPost> dataIndex="title" title="Title"
                    render={(value, record) => {
                        const contentUrl = `posts/show/${record.id}`
                        return <a href={contentUrl}> {value}</a>
                    }}
                />
                <Table.Column dataIndex="status" title="status"
                    render={(value) => <TagField value={value} />}
                />
                <Table.Column dataIndex="createdAt" title="createdAt"
                    render={(value) => <DateField format="LLL" value={value} />}
                />
                <Table.Column dataIndex={["category", "id"]} title="category"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return (
                            <TextField
                                value={
                                    categoriesData?.data.find(
                                        (item) => item.id === value,
                                    )?.title
                                }
                            />
                        );
                    }}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                    defaultFilteredValue={getDefaultFilter("category.id", filters, "in")}
                />
                <Table.Column<IPost>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <DeleteButton 
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
};
