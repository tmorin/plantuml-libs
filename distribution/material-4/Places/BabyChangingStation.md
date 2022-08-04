# BabyChangingStation


```text
material-4/Places/BabyChangingStation
```

```text
include('material-4/Places/BabyChangingStation')
```



| Illustration | BabyChangingStation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/BabyChangingStation.png) | ![illustration for BabyChangingStation](../../material-4/Places/BabyChangingStation.Local.png) |




## BabyChangingStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BabyChangingStation
include('material-4/Places/BabyChangingStation')

' renders the element
BabyChangingStation('BabyChangingStation', 'Baby Changing Station', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BabyChangingStation
include('material-4/Places/BabyChangingStation')

' renders the element
BabyChangingStation('BabyChangingStation', 'Baby Changing Station', 'an optional tech label', 'an optional description')
@enduml
```

