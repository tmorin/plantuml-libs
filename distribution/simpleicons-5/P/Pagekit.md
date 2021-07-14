# Pagekit


```text
simpleicons-5/P/Pagekit
```

```text
include('simpleicons-5/P/Pagekit')
```



| Illustration | Pagekit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pagekit.png) | ![illustration for Pagekit](../../simpleicons-5/P/Pagekit.Local.png) |




## Pagekit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pagekit
include('simpleicons-5/P/Pagekit')

' renders the element
Pagekit('Pagekit', 'Pagekit', 'an optional tech label')
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

' loads the Item which embeds the element Pagekit
include('simpleicons-5/P/Pagekit')

' renders the element
Pagekit('Pagekit', 'Pagekit', 'an optional tech label')
@enduml
```

