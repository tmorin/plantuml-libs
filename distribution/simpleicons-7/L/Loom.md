# Loom


```text
simpleicons-7/L/Loom
```

```text
include('simpleicons-7/L/Loom')
```



| Illustration | Loom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Loom.png) | ![illustration for Loom](../../simpleicons-7/L/Loom.Local.png) |




## Loom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Loom
include('simpleicons-7/L/Loom')

' renders the element
Loom('Loom', 'Loom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Loom
include('simpleicons-7/L/Loom')

' renders the element
Loom('Loom', 'Loom', 'an optional tech label', 'an optional description')
@enduml
```

