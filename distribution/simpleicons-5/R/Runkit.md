# Runkit


```text
simpleicons-5/R/Runkit
```

```text
include('simpleicons-5/R/Runkit')
```



| Illustration | Runkit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Runkit.png) | ![illustration for Runkit](../../simpleicons-5/R/Runkit.Local.png) |




## Runkit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Runkit
include('simpleicons-5/R/Runkit')

' renders the element
Runkit('Runkit', 'Runkit', 'an optional tech label')
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

' loads the Item which embeds the element Runkit
include('simpleicons-5/R/Runkit')

' renders the element
Runkit('Runkit', 'Runkit', 'an optional tech label')
@enduml
```

