# TruckLoading


```text
fontawesome/Solid/TruckLoading
```

```text
include('fontawesome/Solid/TruckLoading')
```



| Illustration | TruckLoading |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TruckLoading.png) | ![illustration for TruckLoading](../../fontawesome/Solid/TruckLoading.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckLoadingXs>`
- `<$TruckLoadingSm>`
- `<$TruckLoadingMd>`
- `<$TruckLoadingLg>`





## TruckLoading

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TruckLoading
include('fontawesome/Solid/TruckLoading')

' renders the element
TruckLoading('TruckLoading', 'Truck Loading', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckLoading
include('fontawesome/Solid/TruckLoading')

' renders the element
TruckLoading('TruckLoading', 'Truck Loading', 'an optional tech label', 'an optional description')
@enduml
```

