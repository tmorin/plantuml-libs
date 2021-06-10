# Thumbtack


```text
fontawesome-5/Solid/Thumbtack
```

```text
include('fontawesome-5/Solid/Thumbtack')
```



| Illustration | Thumbtack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Thumbtack.png) | ![illustration for Thumbtack](../../fontawesome-5/Solid/Thumbtack.Local.png) |




## Thumbtack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Thumbtack
include('fontawesome-5/Solid/Thumbtack')

' renders the element
Thumbtack('Thumbtack', 'Thumbtack', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Thumbtack
include('fontawesome-5/Solid/Thumbtack')

' renders the element
Thumbtack('Thumbtack', 'Thumbtack', 'an optional tech label')
@enduml
```

