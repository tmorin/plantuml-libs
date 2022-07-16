# Kakao


```text
simpleicons-7/K/Kakao
```

```text
include('simpleicons-7/K/Kakao')
```



| Illustration | Kakao |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kakao.png) | ![illustration for Kakao](../../simpleicons-7/K/Kakao.Local.png) |




## Kakao

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kakao
include('simpleicons-7/K/Kakao')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kakao
include('simpleicons-7/K/Kakao')

' renders the element
Kakao('Kakao', 'Kakao', 'an optional tech label')
@enduml
```

