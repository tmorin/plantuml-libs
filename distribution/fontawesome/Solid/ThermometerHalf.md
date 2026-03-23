# ThermometerHalf


```text
fontawesome/Solid/ThermometerHalf
```

```text
include('fontawesome/Solid/ThermometerHalf')
```



| Illustration | ThermometerHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThermometerHalf.png) | ![illustration for ThermometerHalf](../../fontawesome/Solid/ThermometerHalf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThermometerHalfXs>`
- `<$ThermometerHalfSm>`
- `<$ThermometerHalfMd>`
- `<$ThermometerHalfLg>`





## ThermometerHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThermometerHalf
include('fontawesome/Solid/ThermometerHalf')

' renders the element
ThermometerHalf('ThermometerHalf', 'Thermometer Half', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThermometerHalf
include('fontawesome/Solid/ThermometerHalf')

' renders the element
ThermometerHalf('ThermometerHalf', 'Thermometer Half', 'an optional tech label', 'an optional description')
@enduml
```

