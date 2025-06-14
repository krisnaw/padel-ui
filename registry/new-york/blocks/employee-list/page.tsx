import {Button} from "@/registry/new-york/ui/button";
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/registry/new-york/ui/card";
import {Input} from "@/registry/new-york/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/registry/new-york/ui/tabs";
import {Avatar, AvatarFallback, AvatarImage} from "@/registry/new-york/ui/avatar";

const employeeSample = [
    {
        id: 1,
        avatar_url: 'https://github.com/shadcn.png',
        full_name: 'Leonardo',
        email: 'Leonardo@verkel.com'
    },
    {
        id: 2,
        avatar_url: 'https://github.com/johndoe.png',
        full_name: 'John Doe',
        email: 'john.doe@verkel.com'
    },
    {
        id: 3,
        avatar_url: 'https://github.com/janedoe.png',
        full_name: 'Jane Doe',
        email: 'jane.doe@verkel.com'
    },
    {
        id: 4,
        avatar_url: 'https://github.com/bobsmith.png',
        full_name: 'Bob Smith',
        email: 'bob.smith@verkel.com'
    },
    {
        id: 5,
        avatar_url: 'https://github.com/alicejones.png',
        full_name: 'Alice Jones',
        email: 'alice.jones@verkel.com'
    }
]

function EmployeeItems() {
    return (
        <div>
            {employeeSample.map((item) => (
                <div className="mt-2" key={item.id}>
                    <div className="flex items-center">
                        <div className="mr-4 shrink-0">
                            <Avatar className="size-12 rounded-lg">
                                <AvatarImage src={item.avatar_url}/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <p className="font-medium">{item.full_name}</p>
                            <p className="text-sm text-muted-foreground">
                                {item.email}
                            </p>
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
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div className="mr-4 shrink-0">
                                            <Avatar className="size-12 rounded-lg">
                                                <AvatarImage src="https://github.com/shadcn.png"/>
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p className="font-medium">Leonardo</p>
                                            <p className="text-sm text-muted-foreground">Leonardo@verkel.com</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="product">
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div className="mr-4 shrink-0">
                                            <Avatar className="size-12 rounded-lg">
                                                <AvatarImage src="https://github.com/shadcn.png"/>
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p className="font-medium">Leonardo</p>
                                            <p className="text-sm text-muted-foreground">Leonardo@verkel.com</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="development">
                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <div className="mr-4 shrink-0">
                                            <Avatar className="size-12 rounded-lg">
                                                <AvatarImage src="https://github.com/shadcn.png"/>
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p className="font-medium">Leonardo</p>
                                            <p className="text-sm text-muted-foreground">Leonardo@verkel.com</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}