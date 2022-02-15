# Aldisud


```text
simpleicons-6/A/Aldisud
```

```text
include('simpleicons-6/A/Aldisud')
```



| Illustration | Aldisud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aldisud.png) | ![illustration for Aldisud](../../simpleicons-6/A/Aldisud.Local.png) |




## Aldisud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aldisud
include('simpleicons-6/A/Aldisud')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aldisud
include('simpleicons-6/A/Aldisud')

' renders the element
Aldisud('Aldisud', 'Aldisud', 'an optional tech label')
@enduml
```

