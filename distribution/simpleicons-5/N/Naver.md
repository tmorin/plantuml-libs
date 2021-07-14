# Naver


```text
simpleicons-5/N/Naver
```

```text
include('simpleicons-5/N/Naver')
```



| Illustration | Naver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Naver.png) | ![illustration for Naver](../../simpleicons-5/N/Naver.Local.png) |




## Naver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Naver
include('simpleicons-5/N/Naver')

' renders the element
Naver('Naver', 'Naver', 'an optional tech label')
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

' loads the Item which embeds the element Naver
include('simpleicons-5/N/Naver')

' renders the element
Naver('Naver', 'Naver', 'an optional tech label')
@enduml
```

