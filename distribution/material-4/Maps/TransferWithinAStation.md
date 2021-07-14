# TransferWithinAStation


```text
material-4/Maps/TransferWithinAStation
```

```text
include('material-4/Maps/TransferWithinAStation')
```



| Illustration | TransferWithinAStation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/TransferWithinAStation.png) | ![illustration for TransferWithinAStation](../../material-4/Maps/TransferWithinAStation.Local.png) |




## TransferWithinAStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TransferWithinAStation
include('material-4/Maps/TransferWithinAStation')

' renders the element
TransferWithinAStation('TransferWithinAStation', 'Transfer Within A Station', 'an optional tech label')
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

' loads the Item which embeds the element TransferWithinAStation
include('material-4/Maps/TransferWithinAStation')

' renders the element
TransferWithinAStation('TransferWithinAStation', 'Transfer Within A Station', 'an optional tech label')
@enduml
```

