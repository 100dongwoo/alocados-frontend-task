## 알로카도스 프론트엔드 과제


## 실행 방법
```
# 깃허브에서 소스코드를 다운로드 받습니다.

git clone https://github.com/100dongwoo/alocados-frontend-task

# 프로젝트의 기존 패키지를 설치합니다.

yarn install

# 로컬 서버를 통해 프로젝트를 시작합니다.

yarn start

```



## 사용기술

- Typescript
- Context API
- Zustand
- Dayjs
- Styled-components


<hr/>

###  전환불가능한 코인 disabled 처리 [우대사항]
```
- 같은 코인으로는 변경 불가능
- 소지하고 있는 코인보다 적게 소지한 코인들을 disabled
```


###  오직 숫자와 한 개의 .만 입력 가능 [우대사항]
```
- input type number을 통해서 입력을 방지
```


###  Input은 최대 소수점 10번째 자리 수 까지 입력가능(처리 시 소수점 10번째 자리까지 모두 계산 + 10번째 자리 이후 입력은 무시 [우대사항])
```
- onChange 함수에서 정규표현식을 통한 조건문 적용
```



### 과제에 나오지않은 예외처리

```
- 거래내역에서 소수점 2자리까지만 보여주므로, 전환 시 전환 코인이 0.01이상만 가능하도록 진행해두었습니다.

```
