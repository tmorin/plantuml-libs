# KakaoTalk


```text
fontawesome/Brands/KakaoTalk
```

```text
include('fontawesome/Brands/KakaoTalk')
```



| Illustration | KakaoTalk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/KakaoTalk.png) | ![illustration for KakaoTalk](../../fontawesome/Brands/KakaoTalk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KakaoTalkXs>`
- `<$KakaoTalkSm>`
- `<$KakaoTalkMd>`
- `<$KakaoTalkLg>`





## KakaoTalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KakaoTalk
include('fontawesome/Brands/KakaoTalk')

' renders the element
KakaoTalk('KakaoTalk', 'Kakao Talk', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KakaoTalk
include('fontawesome/Brands/KakaoTalk')

' renders the element
KakaoTalk('KakaoTalk', 'Kakao Talk', 'an optional tech label', 'an optional description')
@enduml
```

