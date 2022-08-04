# Aldisud


```text
simpleicons-7/A/Aldisud
```

```text
include('simpleicons-7/A/Aldisud')
```



| Illustration | Aldisud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Aldisud.png) | ![illustration for Aldisud](../../simpleicons-7/A/Aldisud.Local.png) |




## Aldisud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Aldisud
include('simpleicons-7/A/Aldisud')

' renders the element
Aldisud('Aldisud', 'Aldisud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aldisud
include('simpleicons-7/A/Aldisud')

' renders the element
Aldisud('Aldisud', 'Aldisud', 'an optional tech label', 'an optional description')
@enduml
```

