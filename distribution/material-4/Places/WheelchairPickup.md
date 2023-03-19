# WheelchairPickup


```text
material-4/Places/WheelchairPickup
```

```text
include('material-4/Places/WheelchairPickup')
```



| Illustration | WheelchairPickup |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/WheelchairPickup.png) | ![illustration for WheelchairPickup](../../material-4/Places/WheelchairPickup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WheelchairPickupXs>`
- `<$WheelchairPickupSm>`
- `<$WheelchairPickupMd>`
- `<$WheelchairPickupLg>`





## WheelchairPickup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WheelchairPickup
include('material-4/Places/WheelchairPickup')

' renders the element
WheelchairPickup('WheelchairPickup', 'Wheelchair Pickup', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element WheelchairPickup
include('material-4/Places/WheelchairPickup')

' renders the element
WheelchairPickup('WheelchairPickup', 'Wheelchair Pickup', 'an optional tech label', 'an optional description')
@enduml
```

