# AngleRight


```text
fontawesome-5/Solid/AngleRight
```

```text
include('fontawesome-5/Solid/AngleRight')
```



| Illustration | AngleRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AngleRight.png) | ![illustration for AngleRight](../../fontawesome-5/Solid/AngleRight.Local.png) |




## AngleRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AngleRight
include('fontawesome-5/Solid/AngleRight')

' renders the element
AngleRight('AngleRight', 'Angle Right', 'an optional tech label')
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

' loads the Item which embeds the element AngleRight
include('fontawesome-5/Solid/AngleRight')

' renders the element
AngleRight('AngleRight', 'Angle Right', 'an optional tech label')
@enduml
```

