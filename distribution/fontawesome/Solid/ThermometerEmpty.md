# ThermometerEmpty


```text
fontawesome/Solid/ThermometerEmpty
```

```text
include('fontawesome/Solid/ThermometerEmpty')
```



| Illustration | ThermometerEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThermometerEmpty.png) | ![illustration for ThermometerEmpty](../../fontawesome/Solid/ThermometerEmpty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThermometerEmptyXs>`
- `<$ThermometerEmptySm>`
- `<$ThermometerEmptyMd>`
- `<$ThermometerEmptyLg>`





## ThermometerEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThermometerEmpty
include('fontawesome/Solid/ThermometerEmpty')

' renders the element
ThermometerEmpty('ThermometerEmpty', 'Thermometer Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThermometerEmpty
include('fontawesome/Solid/ThermometerEmpty')

' renders the element
ThermometerEmpty('ThermometerEmpty', 'Thermometer Empty', 'an optional tech label', 'an optional description')
@enduml
```

