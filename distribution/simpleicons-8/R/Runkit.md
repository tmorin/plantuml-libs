# Runkit


```text
simpleicons-8/R/Runkit
```

```text
include('simpleicons-8/R/Runkit')
```



| Illustration | Runkit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Runkit.png) | ![illustration for Runkit](../../simpleicons-8/R/Runkit.Local.png) |




## Runkit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Runkit
include('simpleicons-8/R/Runkit')

' renders the element
Runkit('Runkit', 'Runkit', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Runkit
include('simpleicons-8/R/Runkit')

' renders the element
Runkit('Runkit', 'Runkit', 'an optional tech label', 'an optional description')
@enduml
```

