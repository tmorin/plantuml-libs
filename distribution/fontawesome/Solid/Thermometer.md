# Thermometer


```text
fontawesome/Solid/Thermometer
```

```text
include('fontawesome/Solid/Thermometer')
```



| Illustration | Thermometer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Thermometer.png) | ![illustration for Thermometer](../../fontawesome/Solid/Thermometer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThermometerXs>`
- `<$ThermometerSm>`
- `<$ThermometerMd>`
- `<$ThermometerLg>`





## Thermometer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Thermometer
include('fontawesome/Solid/Thermometer')

' renders the element
Thermometer('Thermometer', 'Thermometer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thermometer
include('fontawesome/Solid/Thermometer')

' renders the element
Thermometer('Thermometer', 'Thermometer', 'an optional tech label', 'an optional description')
@enduml
```

