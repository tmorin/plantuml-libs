# Microsoftbing


```text
simpleicons-7/M/Microsoftbing
```

```text
include('simpleicons-7/M/Microsoftbing')
```



| Illustration | Microsoftbing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Microsoftbing.png) | ![illustration for Microsoftbing](../../simpleicons-7/M/Microsoftbing.Local.png) |




## Microsoftbing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Microsoftbing
include('simpleicons-7/M/Microsoftbing')

' renders the element
Microsoftbing('Microsoftbing', 'Microsoftbing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microsoftbing
include('simpleicons-7/M/Microsoftbing')

' renders the element
Microsoftbing('Microsoftbing', 'Microsoftbing', 'an optional tech label', 'an optional description')
@enduml
```

