# MapPin


```text
fontawesome/Solid/MapPin
```

```text
include('fontawesome/Solid/MapPin')
```



| Illustration | MapPin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapPin.png) | ![illustration for MapPin](../../fontawesome/Solid/MapPin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapPinXs>`
- `<$MapPinSm>`
- `<$MapPinMd>`
- `<$MapPinLg>`





## MapPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapPin
include('fontawesome/Solid/MapPin')

' renders the element
MapPin('MapPin', 'Map Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapPin
include('fontawesome/Solid/MapPin')

' renders the element
MapPin('MapPin', 'Map Pin', 'an optional tech label', 'an optional description')
@enduml
```

