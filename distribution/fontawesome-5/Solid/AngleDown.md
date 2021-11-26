# AngleDown


```text
fontawesome-5/Solid/AngleDown
```

```text
include('fontawesome-5/Solid/AngleDown')
```



| Illustration | AngleDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AngleDown.png) | ![illustration for AngleDown](../../fontawesome-5/Solid/AngleDown.Local.png) |




## AngleDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AngleDown
include('fontawesome-5/Solid/AngleDown')

' renders the element
AngleDown('AngleDown', 'Angle Down', 'an optional tech label')
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

' loads the Item which embeds the element AngleDown
include('fontawesome-5/Solid/AngleDown')

' renders the element
AngleDown('AngleDown', 'Angle Down', 'an optional tech label')
@enduml
```

