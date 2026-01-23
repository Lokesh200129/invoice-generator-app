// src/components/InvoicePDF.tsx
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from '@react-pdf/renderer';
import { formInput } from '../types/global';


const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 11,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    leftHeader: {
        width: '50%',
    },
    logoContainer: {
        marginBottom: 4,
    },
    logo: {
        width: 90,
        height: 90,
        objectFit: 'contain',
    },
    logoFallback: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2563eb',
    },
    smallText: {
        fontSize: 10,
        marginBottom: 2,
    },
    bold: {
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold', // 'semi-bold' not supported → use 'bold'
        marginBottom: 6,
        marginTop: 12,
    },
    billBlock: {
        marginBottom: 8,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#9CA3AF',
        marginVertical: 12,
        marginBottom: 24
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        borderBottomColor: '#9CA3AF',
        paddingBottom: 6,
        paddingTop: 16,
        marginTop: 16,
        backgroundColor: '#f8f9fa',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    colDesc: { width: '45%' },
    colQty: { width: '15%', textAlign: 'left' },
    colPrice: { width: '18%', textAlign: 'left' },
    colTotal: { width: '22%', textAlign: 'left' },
    summaryContainer: {
        alignItems: 'flex-end', // right-aligned totals
        marginTop: 28,
        marginBottom: 24
    },
    summaryRow: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    summaryLabel: {
        width: '60%',
        textAlign: 'left',
        paddingRight: 12,
    },
    summaryValue: {
        width: '40%',
        textAlign: 'right',
    },
    grandTotal: {
        borderTopWidth: 1.5,
        borderTopColor: '#9CA3AF',
        paddingTop: 8,
        fontSize: 13,
        fontWeight: 'bold',
    },
    notesSection: {
        marginTop: 40,
        fontSize: 10,
        color: '#444',
        paddingTop: 4
    },
    signature: {
        marginTop: 50,
        borderTopWidth: 1,
        borderTopColor: '#9CA3AF',
        width: 180,
        paddingTop: 8,
        textAlign: 'center',
        alignSelf: 'flex-end', // right-align signature
    },
});

interface Props {
    data: formInput;
}

const InvoicePDF: React.FC<Props> = ({ data }) => {
    const {
        companyLogo,
        companyName,
        companyEmail,
        companyAddress,
        invoiceNumber,
        date,
        clientName,
        clientEmail,
        clientAddress,
        tax: taxPercent,
        currency,
        notes,
        discount: discountPercent,
        isSignInclude,
        items,
    } = data;
    const displayCurrency = currency === '' ? 'Rs ' : currency;
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const discountAmount = subtotal * (discountPercent / 100);
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = afterDiscount * (taxPercent / 100);
    const grandTotal = afterDiscount + taxAmount;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <View style={styles.logoContainer}>
                            {companyLogo ? (
                                <Image src={companyLogo} style={styles.logo} />
                            ) : (
                                <View style={styles.logoFallback}>
                                    <Text>Upload Logo</Text>
                                </View>
                            )}
                        </View>

                        <View style={styles.billBlock}>
                            <Text style={styles.sectionTitle}>BILL FROM</Text>
                            <Text style={styles.bold}>{companyName}</Text>
                            <Text>{companyEmail}</Text>
                            <Text>{companyAddress}</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.title}>INVOICE</Text>
                        <Text style={[styles.smallText, styles.bold]}># {invoiceNumber}</Text>
                        <Text style={styles.smallText}>Date: {date}</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* BILL TO */}
                <View style={styles.billBlock}>
                    <Text style={styles.sectionTitle}>BILL TO</Text>
                    <Text style={styles.bold}>{clientName}</Text>
                    <Text>{clientEmail}</Text>
                    <Text>{clientAddress}</Text>
                </View>

                {/* Items Table */}
                <View>
                    <View style={styles.tableHeader}>
                        <Text style={styles.colDesc}>DESCRIPTION</Text>
                        <Text style={styles.colQty}>QTY</Text>
                        <Text style={styles.colPrice}>PRICE</Text>
                        <Text style={styles.colTotal}>TOTAL</Text>
                    </View>

                    {items.length === 0 ? (
                        <View style={styles.tableRow}>
                            <Text style={styles.colDesc}>No items</Text>
                            <Text style={styles.colQty}>-</Text>
                            <Text style={styles.colPrice}>-</Text>
                            <Text style={styles.colTotal}>-</Text>
                        </View>
                    ) : (
                        items.map((item, index) => {
                            const itemTotal = item.quantity * item.price;
                            return (
                                <View key={index} style={styles.tableRow}>
                                    <Text style={styles.colDesc}>{item.description}</Text>
                                    <Text style={styles.colQty}>{item.quantity}</Text>
                                    <Text style={styles.colPrice}>
                                        {displayCurrency}
                                        {item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </Text>
                                    <Text style={styles.colTotal}>
                                        {displayCurrency}
                                        {itemTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </Text>
                                </View>
                            );
                        })
                    )}
                </View>

                {/* Summary – right aligned */}
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Subtotal</Text>
                        <Text style={styles.summaryValue}>
                            {displayCurrency}
                            {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Discount ({discountPercent}%)</Text>
                        <Text style={styles.summaryValue}>
                            {displayCurrency}
                            {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Tax ({taxPercent}%)</Text>
                        <Text style={styles.summaryValue}>
                            {displayCurrency}
                            {taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Text>
                    </View>

                    <View style={[styles.summaryRow, styles.grandTotal]}>
                        <Text style={styles.summaryLabel}>Total</Text>
                        <Text style={[styles.summaryValue, { color: '#2563eb' }]}>
                            {displayCurrency}
                            {grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </Text>
                    </View>
                </View>


                {/* Notes */}
                <View style={styles.notesSection}>
                    <View style={styles.divider} />
                    <Text style={styles.bold}>NOTES & TERMS</Text>
                    <Text>{notes || 'Thank You For Your Business!'}</Text>
                </View>

                {/* Signature – right aligned */}
                {isSignInclude && (
                    <View style={styles.signature}>
                        <Text>Signature</Text>
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default InvoicePDF;