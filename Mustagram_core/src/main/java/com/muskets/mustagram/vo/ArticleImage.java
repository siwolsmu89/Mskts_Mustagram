package com.muskets.mustagram.vo;

public class ArticleImage {
    private int articleNo;
    private String src;
    private String alt;

    public ArticleImage() {}

    public String toString() {
        String result = "";

        result += "Article " + articleNo + " includes this image. /n";
        result += "Image src: " + src + "/n";
        result += "Image alternative text: " + alt;

        return result;
    }

    public int getArticleNo() {
        return articleNo;
    }

    public void setArticleNo(int articleNo) {
        this.articleNo = articleNo;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }
}
