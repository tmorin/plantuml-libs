# ThermometerThreeQuarters


```text
fontawesome/Solid/ThermometerThreeQuarters
```

```text
include('fontawesome/Solid/ThermometerThreeQuarters')
```



| Illustration | ThermometerThreeQuarters |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThermometerThreeQuarters.png) | ![illustration for ThermometerThreeQuarters](../../fontawesome/Solid/ThermometerThreeQuarters.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThermometerThreeQuartersXs>`
- `<$ThermometerThreeQuartersSm>`
- `<$ThermometerThreeQuartersMd>`
- `<$ThermometerThreeQuartersLg>`





## ThermometerThreeQuarters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThermometerThreeQuarters
include('fontawesome/Solid/ThermometerThreeQuarters')

' renders the element
ThermometerThreeQuarters('ThermometerThreeQuarters', 'Thermometer Three Quarters', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThermometerThreeQuarters
include('fontawesome/Solid/ThermometerThreeQuarters')

' renders the element
ThermometerThreeQuarters('ThermometerThreeQuarters', 'Thermometer Three Quarters', 'an optional tech label', 'an optional description')
@enduml
```

