SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS article_comment;
DROP TABLE IF EXISTS article_picture;
DROP TABLE IF EXISTS article_main;
DROP TABLE IF EXISTS user_follow;
DROP TABLE IF EXISTS user_info;




/* Create Tables */

CREATE TABLE article_comment
(
	-- 댓글 번호
	comment_no int NOT NULL AUTO_INCREMENT COMMENT '댓글 번호',
	-- 댓글 작성자 ID
	comment_writer varchar(20) NOT NULL COMMENT '댓글 작성자 ID',
	-- 댓글 본문
	comment_text varchar(600) NOT NULL COMMENT '댓글 본문',
	-- 게시글 번호
	article_no int NOT NULL COMMENT '게시글 번호',
	-- 대댓글 번호
	quote_no int COMMENT '대댓글 번호',
	PRIMARY KEY (comment_no)
);


CREATE TABLE article_main
(
	-- 게시글 번호
	article_no int NOT NULL AUTO_INCREMENT COMMENT '게시글 번호',
	-- 작성자 ID
	article_writer varchar(20) COMMENT '작성자 ID',
	-- 게시글에 찍힌 좋아요 개수
	article_likes int DEFAULT 0 COMMENT '게시글에 찍힌 좋아요 개수',
	-- 게시글 본문
	article_text longtext COMMENT '게시글 본문',
	PRIMARY KEY (article_no)
);


CREATE TABLE article_picture
(
	-- 게시글 번호
	article_no int NOT NULL COMMENT '게시글 번호',
	-- 사진 파일 경로
	image_src varchar(300) NOT NULL COMMENT '사진 파일 경로',
	-- 사진 파일의 대체 텍스트
	image_alt varchar(300) NOT NULL COMMENT '사진 파일의 대체 텍스트',
	UNIQUE (image_src)
);


CREATE TABLE user_follow
(
	-- 팔로워(팔로우를 하는 사람) 아이디
	follower_id varchar(20) NOT NULL COMMENT '팔로워(팔로우를 하는 사람) 아이디',
	-- 팔로우를 받는 사람 ID
	followee_id varchar(20) NOT NULL COMMENT '팔로우를 받는 사람 ID',
	-- 맞팔 여부
	is_followback char DEFAULT 'N' COMMENT '맞팔 여부'
);


CREATE TABLE user_info
(
	-- 회원 식별에 사용할 회원 ID
	user_id varchar(20) NOT NULL COMMENT '회원 식별에 사용할 회원 ID',
	-- 사용자의 이름(실명)
	user_name varchar(30) NOT NULL COMMENT '사용자의 이름(실명)',
	-- 회원 로그인을 위해 사용할 비밀번호
	user_password varchar(20) NOT NULL COMMENT '회원 로그인을 위해 사용할 비밀번호',
	-- 회원 전화번호
	user_telephone varchar(20) NOT NULL COMMENT '회원 전화번호',
	-- 회원 이메일 주소
	user_email varchar(256) NOT NULL COMMENT '회원 이메일 주소',
	-- (선택입력) 회원 성별
	user_gender char COMMENT '(선택입력) 회원 성별',
	-- (선택입력) 생년월일
	user_birthdate varchar(8) COMMENT '(선택입력) 생년월일',
	-- (선택입력) 회원 주소
	user_address varchar(1500) COMMENT '(선택입력) 회원 주소',
	-- (선택입력) 회원 프로필 사진 경로
	user_image varchar(300) COMMENT '(선택입력) 회원 프로필 사진 경로',
	-- (선택입력) 회원 별명
	user_nickname varchar(30) COMMENT '(선택입력) 회원 별명',
	-- (선택입력) 연동된 SNS 코드
	user_sns varchar(30) COMMENT '(선택입력) 연동된 SNS 코드',
	PRIMARY KEY (user_id),
	UNIQUE (user_telephone),
	UNIQUE (user_email),
	UNIQUE (user_nickname)
);



/* Create Foreign Keys */

ALTER TABLE article_comment
	ADD FOREIGN KEY (quote_no)
	REFERENCES article_comment (comment_no)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE article_comment
	ADD FOREIGN KEY (article_no)
	REFERENCES article_main (article_no)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE article_picture
	ADD FOREIGN KEY (article_no)
	REFERENCES article_main (article_no)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE article_comment
	ADD FOREIGN KEY (comment_writer)
	REFERENCES user_info (user_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE article_main
	ADD FOREIGN KEY (article_writer)
	REFERENCES user_info (user_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE user_follow
	ADD FOREIGN KEY (follower_id)
	REFERENCES user_info (user_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE user_follow
	ADD FOREIGN KEY (followee_id)
	REFERENCES user_info (user_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



