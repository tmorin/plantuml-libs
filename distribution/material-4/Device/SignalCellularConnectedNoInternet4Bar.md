# SignalCellularConnectedNoInternet4Bar


```text
material-4/Device/SignalCellularConnectedNoInternet4Bar
```

```text
include('material-4/Device/SignalCellularConnectedNoInternet4Bar')
```



| Illustration | SignalCellularConnectedNoInternet4Bar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalCellularConnectedNoInternet4Bar.png) | ![illustration for SignalCellularConnectedNoInternet4Bar](../../material-4/Device/SignalCellularConnectedNoInternet4Bar.Local.png) |




## SignalCellularConnectedNoInternet4Bar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalCellularConnectedNoInternet4Bar
include('material-4/Device/SignalCellularConnectedNoInternet4Bar')

' renders the element
SignalCellularConnectedNoInternet4Bar('SignalCellularConnectedNoInternet4Bar', 'Signal Cellular Connected No Internet4 Bar', 'an optional tech label')
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

' loads the Item which embeds the element SignalCellularConnectedNoInternet4Bar
include('material-4/Device/SignalCellularConnectedNoInternet4Bar')

' renders the element
SignalCellularConnectedNoInternet4Bar('SignalCellularConnectedNoInternet4Bar', 'Signal Cellular Connected No Internet4 Bar', 'an optional tech label')
@enduml
```

