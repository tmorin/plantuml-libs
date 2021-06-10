# Ghost


```text
fontawesome-5/Solid/Ghost
```

```text
include('fontawesome-5/Solid/Ghost')
```



| Illustration | Ghost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ghost.png) | ![illustration for Ghost](../../fontawesome-5/Solid/Ghost.Local.png) |




## Ghost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ghost
include('fontawesome-5/Solid/Ghost')

' renders the element
Ghost('Ghost', 'Ghost', 'an optional tech label')
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

' loads the Item which embeds the element Ghost
include('fontawesome-5/Solid/Ghost')

' renders the element
Ghost('Ghost', 'Ghost', 'an optional tech label')
@enduml
```

