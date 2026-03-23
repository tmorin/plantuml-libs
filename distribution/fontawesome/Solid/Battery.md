# Battery


```text
fontawesome/Solid/Battery
```

```text
include('fontawesome/Solid/Battery')
```



| Illustration | Battery |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Battery.png) | ![illustration for Battery](../../fontawesome/Solid/Battery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryXs>`
- `<$BatterySm>`
- `<$BatteryMd>`
- `<$BatteryLg>`





## Battery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Battery
include('fontawesome/Solid/Battery')

' renders the element
Battery('Battery', 'Battery', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Battery
include('fontawesome/Solid/Battery')

' renders the element
Battery('Battery', 'Battery', 'an optional tech label', 'an optional description')
@enduml
```

