# AngleLeft


```text
fontawesome-5/Solid/AngleLeft
```

```text
include('fontawesome-5/Solid/AngleLeft')
```



| Illustration | AngleLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AngleLeft.png) | ![illustration for AngleLeft](../../fontawesome-5/Solid/AngleLeft.Local.png) |




## AngleLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AngleLeft
include('fontawesome-5/Solid/AngleLeft')

' renders the element
AngleLeft('AngleLeft', 'Angle Left', 'an optional tech label')
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

' loads the Item which embeds the element AngleLeft
include('fontawesome-5/Solid/AngleLeft')

' renders the element
AngleLeft('AngleLeft', 'Angle Left', 'an optional tech label')
@enduml
```

