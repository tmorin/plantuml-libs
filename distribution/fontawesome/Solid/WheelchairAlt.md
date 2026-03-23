# WheelchairAlt


```text
fontawesome/Solid/WheelchairAlt
```

```text
include('fontawesome/Solid/WheelchairAlt')
```



| Illustration | WheelchairAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WheelchairAlt.png) | ![illustration for WheelchairAlt](../../fontawesome/Solid/WheelchairAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WheelchairAltXs>`
- `<$WheelchairAltSm>`
- `<$WheelchairAltMd>`
- `<$WheelchairAltLg>`





## WheelchairAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WheelchairAlt
include('fontawesome/Solid/WheelchairAlt')

' renders the element
WheelchairAlt('WheelchairAlt', 'Wheelchair Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WheelchairAlt
include('fontawesome/Solid/WheelchairAlt')

' renders the element
WheelchairAlt('WheelchairAlt', 'Wheelchair Alt', 'an optional tech label', 'an optional description')
@enduml
```

