package com.shortstack.griddle.model;

import org.springframework.stereotype.Component;

@Component
public class IncomingRequest {
    private Amount amount;
    private Source source;
    private TransactionDetails transactionDetails;
    private MerchantDetails merchantDetails;

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }

    public Source getSource() {
        return source;
    }

    public void setSource(Source source) {
        this.source = source;
    }

    public TransactionDetails getTransactionDetails() {
        return transactionDetails;
    }

    public void setTransactionDetails(TransactionDetails transactionDetails) {
        this.transactionDetails = transactionDetails;
    }

    public MerchantDetails getMerchantDetails() {
        return merchantDetails;
    }

    public void setMerchantDetails(MerchantDetails merchantDetails) {
        this.merchantDetails = merchantDetails;
    }

    public static class Amount {
        private double total;
        private String currency;

        public double getTotal() {
            return total;
        }

        public void setTotal(double total) {
            this.total = total;
        }

        public String getCurrency() {
            return currency;
        }

        public void setCurrency(String currency) {
            this.currency = currency;
        }
    }

    public static class Source {
        private String sourceType;
        private Card card;

        public String getSourceType() {
            return sourceType;
        }

        public void setSourceType(String sourceType) {
            this.sourceType = sourceType;
        }

        public Card getCard() {
            return card;
        }

        public void setCard(Card card) {
            this.card = card;
        }
    }

    public static class Card {
        private String cardData;
        private String expirationMonth;
        private String expirationYear;
        private String securityCode;

        public String getCardData() {
            return cardData;
        }

        public void setCardData(String cardData) {
            this.cardData = cardData;
        }

        public String getExpirationMonth() {
            return expirationMonth;
        }

        public void setExpirationMonth(String expirationMonth) {
            this.expirationMonth = expirationMonth;
        }

        public String getExpirationYear() {
            return expirationYear;
        }

        public void setExpirationYear(String expirationYear) {
            this.expirationYear = expirationYear;
        }

        public String getSecurityCode() {
            return securityCode;
        }

        public void setSecurityCode(String securityCode) {
            this.securityCode = securityCode;
        }
    }

    public static class TransactionDetails {
        private boolean captureFlag;

        public boolean isCaptureFlag() {
            return captureFlag;
        }

        public void setCaptureFlag(boolean captureFlag) {
            this.captureFlag = captureFlag;
        }
    }

    public static class MerchantDetails {
        private String merchantId;
        private String terminalId;

        public String getMerchantId() {
            return merchantId;
        }

        public void setMerchantId(String merchantId) {
            this.merchantId = merchantId;
        }

        public String getTerminalId() {
            return terminalId;
        }

        public void setTerminalId(String terminalId) {
            this.terminalId = terminalId;
        }
    }
}
