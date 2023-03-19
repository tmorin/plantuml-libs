# TruckRampBox


```text
fontawesome-6/Solid/TruckRampBox
```

```text
include('fontawesome-6/Solid/TruckRampBox')
```



| Illustration | TruckRampBox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckRampBox.png) | ![illustration for TruckRampBox](../../fontawesome-6/Solid/TruckRampBox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckRampBoxXs>`
- `<$TruckRampBoxSm>`
- `<$TruckRampBoxMd>`
- `<$TruckRampBoxLg>`





## TruckRampBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckRampBox
include('fontawesome-6/Solid/TruckRampBox')

' renders the element
TruckRampBox('TruckRampBox', 'Truck Ramp Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckRampBox
include('fontawesome-6/Solid/TruckRampBox')

' renders the element
TruckRampBox('TruckRampBox', 'Truck Ramp Box', 'an optional tech label', 'an optional description')
@enduml
```

