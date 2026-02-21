# CarBattery


```text
fontawesome/Solid/CarBattery
```

```text
include('fontawesome/Solid/CarBattery')
```



| Illustration | CarBattery |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CarBattery.png) | ![illustration for CarBattery](../../fontawesome/Solid/CarBattery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarBatteryXs>`
- `<$CarBatterySm>`
- `<$CarBatteryMd>`
- `<$CarBatteryLg>`





## CarBattery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarBattery
include('fontawesome/Solid/CarBattery')

' renders the element
CarBattery('CarBattery', 'Car Battery', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarBattery
include('fontawesome/Solid/CarBattery')

' renders the element
CarBattery('CarBattery', 'Car Battery', 'an optional tech label', 'an optional description')
@enduml
```

