import {Button} from "@/registry/new-york/ui/button";
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/registry/new-york/ui/card";
import {Input} from "@/registry/new-york/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/registry/new-york/ui/tabs";
import {Avatar, AvatarFallback, AvatarImage} from "@/registry/new-york/ui/avatar";
import {EllipsisVertical} from "lucide-react";
import {Badge} from "@/registry/new-york/ui/badge";
import {useMemo} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/registry/new-york/ui/dropdown-menu";

const employeeSample = [
    {
        id: 1,
        avatar_url: 'https://i.pravatar.cc/152',
        full_name: 'Leonardo',
        role: 'Design Lead',
        category: 'Product',
        class: 'bg-blue-100 text-blue-700 dark:bg-blue-600'
    },
    {
        id: 2,
        avatar_url: 'https://i.pravatar.cc/122',
        full_name: 'John Doe',
        role: 'Product Manager',
        category: 'Management',
        class: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-600'
    },
    {
        id: 3,
        avatar_url: 'https://i.pravatar.cc/159',
        full_name: 'Jane Doe',
        role: 'Senior Developer',
        category: 'Development',
        class: 'bg-green-100 text-green-700 dark:bg-green-600'
    },
    {
        id: 4,
        avatar_url: 'https://i.pravatar.cc/132',
        full_name: 'Bob Smith',
        role: 'UX Designer',
        category: 'Product',
        class: 'bg-blue-100 text-blue-700 dark:bg-blue-600'
    },
    {
        id: 5,
        avatar_url: 'https://i.pravatar.cc/192',
        full_name: 'Alice Jones',
        role: 'Technical Lead',
        category: 'Management',
        class: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-600'
    }
]

function EmployeeItems() {
    const shuffledEmployees = useMemo(() => [...employeeSample].sort(() => Math.random() - 0.5), []);

    return (
        <div className="space-y-6">
            {shuffledEmployees.map((item) => (
                <div className="mt-2" key={item.id}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-start">
                            <div className="mr-4 shrink-0">
                                <Avatar className="size-14 rounded-lg">
                                    <AvatarImage src={item.avatar_url}/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <p className="font-medium">{item.full_name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {item.role}
                                    <Badge
                                        variant="secondary"
                                        className={`font-bold ml-2.5 rounded-sm ${item.class}`}
                                    >
                                        {item.category}
                                    </Badge>
                                </p>

                            </div>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <EllipsisVertical className="text-muted-foreground"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        Copy payment ID
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>View customer</DropdownMenuItem>
                                    <DropdownMenuItem>View payment details</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function EmployeeList() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Employee List
                </CardTitle>
                <CardAction>
                    <div className="space-x-2.5">
                        <Button variant="outline" size="sm">View all</Button>
                        <Button size="sm">Add Employee</Button>
                    </div>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div>
                    <div>
                        <Input placeholder="Search" className="w-full"/>
                    </div>
                    <div className="mt-6">
                        <Tabs defaultValue="all" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="management">Management</TabsTrigger>
                                <TabsTrigger value="product">Product</TabsTrigger>
                                <TabsTrigger value="development">Development</TabsTrigger>
                            </TabsList>

                            <TabsContent value="all">
                                <EmployeeItems/>
                            </TabsContent>

                            <TabsContent value="management">
                                <EmployeeItems/>
                            </TabsContent>

                            <TabsContent value="product">
                                <EmployeeItems/>
                            </TabsContent>

                            <TabsContent value="development">
                                <EmployeeItems/>
                            </TabsContent>

                        </Tabs>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}