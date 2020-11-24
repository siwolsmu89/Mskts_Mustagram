package com.muskets.mustagram.vo;

import java.util.List;

public class Article {
    private int no;
    private String writer;
    private int likes;
    private String text;
    private List<ArticleImage> imageList;

    public Article() {}

    public String toString() {
        String result = "";
        String subText = text.length() > 10 ? text.substring(0, 10) + " (...)" : text;

        result += "Article No: " + no + "/n";
        result += "Article Writer: " + writer + "/n";
        result += "Article Likes: " + likes + "/n";
        result += "Article Text: " + subText + "/n";
        result += "Article Image: " + imageList.size() + "image(s) included";

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

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<ArticleImage> getImageList() {
        return imageList;
    }

    public void setImageList(List<ArticleImage> imageList) {
        this.imageList = imageList;
    }
}
