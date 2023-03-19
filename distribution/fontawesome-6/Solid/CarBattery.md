# CarBattery


```text
fontawesome-6/Solid/CarBattery
```

```text
include('fontawesome-6/Solid/CarBattery')
```



| Illustration | CarBattery |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CarBattery.png) | ![illustration for CarBattery](../../fontawesome-6/Solid/CarBattery.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CarBattery
include('fontawesome-6/Solid/CarBattery')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CarBattery
include('fontawesome-6/Solid/CarBattery')

' renders the element
CarBattery('CarBattery', 'Car Battery', 'an optional tech label', 'an optional description')
@enduml
```

