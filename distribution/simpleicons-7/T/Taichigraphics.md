# Taichigraphics


```text
simpleicons-7/T/Taichigraphics
```

```text
include('simpleicons-7/T/Taichigraphics')
```



| Illustration | Taichigraphics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Taichigraphics.png) | ![illustration for Taichigraphics](../../simpleicons-7/T/Taichigraphics.Local.png) |




## Taichigraphics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Taichigraphics
include('simpleicons-7/T/Taichigraphics')

' renders the element
Taichigraphics('Taichigraphics', 'Taichigraphics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Taichigraphics
include('simpleicons-7/T/Taichigraphics')

' renders the element
Taichigraphics('Taichigraphics', 'Taichigraphics', 'an optional tech label', 'an optional description')
@enduml
```

