package com.muskets.mustagram.vo;

public class Comment {
    private int no;
    private String writer;
    private String text;
    private int articleNo;
    private int quoteNo;

    public Comment() {}

    public String toString() {
        String result = "";
        String subText = text.length()>10 ? text.substring(0, 10) + " (...)" : text;

        result += "Comment No: " + no + "/n";
        result += "Comment Writer: " + writer + "/n";
        result += "Comment Text: " + subText + "/n";
        result += "Article " + articleNo + " contains this comment";
        if (quoteNo != 0) {
            result += "/n" + "This comment quotes comment " + quoteNo;
        }

        return result;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getArticleNo() {
        return articleNo;
    }

    public void setArticleNo(int articleNo) {
        this.articleNo = articleNo;
    }

    public int getQuoteNo() {
        return quoteNo;
    }

    public void setQuoteNo(int quoteNo) {
        this.quoteNo = quoteNo;
    }
}
