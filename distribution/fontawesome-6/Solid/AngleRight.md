# AngleRight


```text
fontawesome-6/Solid/AngleRight
```

```text
include('fontawesome-6/Solid/AngleRight')
```



| Illustration | AngleRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AngleRight.png) | ![illustration for AngleRight](../../fontawesome-6/Solid/AngleRight.Local.png) |




## AngleRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AngleRight
include('fontawesome-6/Solid/AngleRight')

' renders the element
AngleRight('AngleRight', 'Angle Right', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AngleRight
include('fontawesome-6/Solid/AngleRight')

' renders the element
AngleRight('AngleRight', 'Angle Right', 'an optional tech label', 'an optional description')
@enduml
```

