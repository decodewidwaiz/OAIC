import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import {
  Table,
  TableBody,
  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { pricingTiers } from '@/data/registration';

export default function PricingTable() {
  return (
    <Tabs defaultValue="Early Bird">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        {pricingTiers.map((tier) => (
          <TabsTrigger key={tier.name} value={tier.name}>
            {tier.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {pricingTiers.map((tier) => (
        <TabsContent key={tier.name} value={tier.name}>
          <Card glowOnHover={false}>
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-sm sm:text-base">{tier.name} Registration</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Cutoff: {tier.cutoff}</CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs sm:text-sm">Category</TableHead>
                    <TableHead className="text-right text-xs sm:text-sm">Fee</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tier.rows.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell className="font-medium text-xs sm:text-sm">
                        {row.category}
                      </TableCell>
                      <TableCell className="text-right font-mono text-xs sm:text-sm">
                        {row.currency === 'INR' ? '₹' : '$'}
                        {row.amount}
                        <span className="ml-1 sm:ml-2 text-muted-foreground">
                          {row.currency}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
      <div className="mt-8 text-center">
        <Button size="lg">Register Now</Button>
      </div>
    </Tabs>
  );
}
