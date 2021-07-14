# Pyup


```text
simpleicons-5/P/Pyup
```

```text
include('simpleicons-5/P/Pyup')
```



| Illustration | Pyup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pyup.png) | ![illustration for Pyup](../../simpleicons-5/P/Pyup.Local.png) |




## Pyup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pyup
include('simpleicons-5/P/Pyup')

' renders the element
Pyup('Pyup', 'Pyup', 'an optional tech label')
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

' loads the Item which embeds the element Pyup
include('simpleicons-5/P/Pyup')

' renders the element
Pyup('Pyup', 'Pyup', 'an optional tech label')
@enduml
```

