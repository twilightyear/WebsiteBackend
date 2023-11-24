# Website Backend 프로젝트


* *NodeJS*
* *Express*
* *MySQL*
* *Sequelize*

#
**1. 초기화**

```
sequelize init
```
```
sudo npm cache clean -f
```

```
npx sequelize-cli init
```
#
**2. 모델파일 생성**

```
sequelize model:generate --name community --attributes title:string,content:string
sequelize model:generate --name comment --attributes text:string
```

```
npx sequelize-cli db:migrate
```
#
**3. 관계형 데이터베이스 정립**

*/models/comment.js* 에 다음과 같은 코드를 삽입하여 관계형 데이터베이스를 정립합니다.
```js
static  associate(models) {
	Comment.belongsTo(models.Community, {
		foreignKey:  'CommunityId',
		onDelete:  'CASCADE'
	});
}
```
*/models/community.js* 에도 다음과 같은 코드를 삽입하여 관계형 데이터베이스를 정립합니다.
```js
static  associate(models) {
	Community.hasMany(models.Comment, {
		foreignKey:  'CommunityId',
		onDelete:  'CASCADE'
	});
}
```
#
**4. 데이터베이스 생성**
```
npx sequelize-cli db:create
```
#
**5. 데이터베이스 설정**

**MySQLWorkbench**를 이용하여 데이터베이스를 설정해야 했습니다.

WorkBench의 메인화면은 다음과 같습니다.
![initial](https://github.com/twilightyear/WebsiteBackend/assets/80385994/2847730d-9ae0-420a-b97c-667819589219)

#
*Comments* 데이터베이스의 값들은 다음과 같습니다.
이때 관계형 데이터베이스로 정상적으로 만들어졌다면 *CommunityId*값이 자동으로 생성되어야하지만
생성되지 않았을 경우에는 직접 추가를 해줘야 합니다.

먼저 아래 명령어로 데이터베이스에 접근하여 쿼리문을 실행할 수 있는 환경을 만들어줘야 했습니다.
```
mysql -u root -p database
```
이후 아래 명령어로 누락되었던 *Foreign Key*인 *CommunityId*의 칼럼을 수동으로 생성했습니다.
```
ALTER  TABLE Comments ADD  COLUMN CommunityId INT, ADD  CONSTRAINT fk_CommunityId FOREIGN KEY (CommunityId) REFERENCES Communities(id) ON  DELETE CASCADE;
```

또한 createdAt 칼럼과 *updatedAt* 칼럼의 *Default / Expression* 영역에
*CURRENT_TIMESTAMP* 와 *CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP*를 적절하게
설정을 해줘야 했습니다.
![image](https://github.com/twilightyear/WebsiteBackend/assets/80385994/d027cbec-38f5-4341-8746-61c7f45770ac)

#
*Community* 데이터베이스의 값들은 다음과 같습니다. 

마찬가지로 createdAt 칼럼과 *updatedAt* 칼럼의 *Default / Expression* 영역에
*CURRENT_TIMESTAMP* 와 *CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP*를 적절하게
설정을 해줘야 했습니다.
![image](https://github.com/twilightyear/WebsiteBackend/assets/80385994/79308265-f6b2-44f7-856a-66f10afbed7f)

#
**6. 서버 구동**
아래의 명령어를 실행하면 서버가 시작됩니다.
```
node app.js
```
성공적으로 실행되었다면 다음과 같은 결과가 나올겁니다.
![image](https://github.com/twilightyear/WebsiteBackend/assets/80385994/9b216054-603a-48ae-9b41-f7e75c10cc69)

#
**7. 요청처리**

다음은 **POSTMAN**을 사용하여 목표로 했던 9가지의 기능들을 사용해 볼까 합니다.
* 게시글 전체조회
* 게시글 상세조회
* 게시글 삭제
* 게시글 수정
* 게시글 생성
* 댓글 조회
* 댓글 수정
* 댓글 삭제

![image](https://github.com/twilightyear/WebsiteBackend/assets/80385994/4eb63ba0-fca8-477f-83d5-f8410deb37ba)

