# TemperatureHigh


```text
fontawesome/Solid/TemperatureHigh
```

```text
include('fontawesome/Solid/TemperatureHigh')
```



| Illustration | TemperatureHigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TemperatureHigh.png) | ![illustration for TemperatureHigh](../../fontawesome/Solid/TemperatureHigh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemperatureHighXs>`
- `<$TemperatureHighSm>`
- `<$TemperatureHighMd>`
- `<$TemperatureHighLg>`





## TemperatureHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureHigh
include('fontawesome/Solid/TemperatureHigh')

' renders the element
TemperatureHigh('TemperatureHigh', 'Temperature High', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TemperatureHigh
include('fontawesome/Solid/TemperatureHigh')

' renders the element
TemperatureHigh('TemperatureHigh', 'Temperature High', 'an optional tech label', 'an optional description')
@enduml
```

