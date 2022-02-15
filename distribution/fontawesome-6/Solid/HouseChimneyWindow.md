# HouseChimneyWindow


```text
fontawesome-6/Solid/HouseChimneyWindow
```

```text
include('fontawesome-6/Solid/HouseChimneyWindow')
```



| Illustration | HouseChimneyWindow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseChimneyWindow.png) | ![illustration for HouseChimneyWindow](../../fontawesome-6/Solid/HouseChimneyWindow.Local.png) |




## HouseChimneyWindow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseChimneyWindow
include('fontawesome-6/Solid/HouseChimneyWindow')

' renders the element
HouseChimneyWindow('HouseChimneyWindow', 'House Chimney Window', 'an optional tech label')
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

' loads the Item which embeds the element HouseChimneyWindow
include('fontawesome-6/Solid/HouseChimneyWindow')

' renders the element
HouseChimneyWindow('HouseChimneyWindow', 'House Chimney Window', 'an optional tech label')
@enduml
```

