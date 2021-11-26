# Qiita


```text
simpleicons-5/Q/Qiita
```

```text
include('simpleicons-5/Q/Qiita')
```



| Illustration | Qiita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Qiita.png) | ![illustration for Qiita](../../simpleicons-5/Q/Qiita.Local.png) |




## Qiita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Qiita
include('simpleicons-5/Q/Qiita')

' renders the element
Qiita('Qiita', 'Qiita', 'an optional tech label')
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

' loads the Item which embeds the element Qiita
include('simpleicons-5/Q/Qiita')

' renders the element
Qiita('Qiita', 'Qiita', 'an optional tech label')
@enduml
```

