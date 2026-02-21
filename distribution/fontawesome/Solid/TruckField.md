# TruckField


```text
fontawesome/Solid/TruckField
```

```text
include('fontawesome/Solid/TruckField')
```



| Illustration | TruckField |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TruckField.png) | ![illustration for TruckField](../../fontawesome/Solid/TruckField.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckFieldXs>`
- `<$TruckFieldSm>`
- `<$TruckFieldMd>`
- `<$TruckFieldLg>`





## TruckField

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TruckField
include('fontawesome/Solid/TruckField')

' renders the element
TruckField('TruckField', 'Truck Field', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckField
include('fontawesome/Solid/TruckField')

' renders the element
TruckField('TruckField', 'Truck Field', 'an optional tech label', 'an optional description')
@enduml
```

