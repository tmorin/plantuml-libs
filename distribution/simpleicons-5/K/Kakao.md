# Kakao


```text
simpleicons-5/K/Kakao
```

```text
include('simpleicons-5/K/Kakao')
```



| Illustration | Kakao |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kakao.png) | ![illustration for Kakao](../../simpleicons-5/K/Kakao.Local.png) |




## Kakao

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kakao
include('simpleicons-5/K/Kakao')

' renders the element
Kakao('Kakao', 'Kakao', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kakao
include('simpleicons-5/K/Kakao')

' renders the element
Kakao('Kakao', 'Kakao', 'an optional tech label')
@enduml
```

