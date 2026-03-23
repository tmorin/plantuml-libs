# ThermometerQuarter


```text
fontawesome/Solid/ThermometerQuarter
```

```text
include('fontawesome/Solid/ThermometerQuarter')
```



| Illustration | ThermometerQuarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThermometerQuarter.png) | ![illustration for ThermometerQuarter](../../fontawesome/Solid/ThermometerQuarter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThermometerQuarterXs>`
- `<$ThermometerQuarterSm>`
- `<$ThermometerQuarterMd>`
- `<$ThermometerQuarterLg>`





## ThermometerQuarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThermometerQuarter
include('fontawesome/Solid/ThermometerQuarter')

' renders the element
ThermometerQuarter('ThermometerQuarter', 'Thermometer Quarter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThermometerQuarter
include('fontawesome/Solid/ThermometerQuarter')

' renders the element
ThermometerQuarter('ThermometerQuarter', 'Thermometer Quarter', 'an optional tech label', 'an optional description')
@enduml
```

