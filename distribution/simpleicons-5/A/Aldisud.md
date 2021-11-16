# Aldisud


```text
simpleicons-5/A/Aldisud
```

```text
include('simpleicons-5/A/Aldisud')
```



| Illustration | Aldisud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aldisud.png) | ![illustration for Aldisud](../../simpleicons-5/A/Aldisud.Local.png) |




## Aldisud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aldisud
include('simpleicons-5/A/Aldisud')

' renders the element
Aldisud('Aldisud', 'Aldisud', 'an optional tech label')
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

' loads the Item which embeds the element Aldisud
include('simpleicons-5/A/Aldisud')

' renders the element
Aldisud('Aldisud', 'Aldisud', 'an optional tech label')
@enduml
```

