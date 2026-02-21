# SignalCellularConnectedNoInternet4Bar


```text
material/Device/SignalCellularConnectedNoInternet4Bar
```

```text
include('material/Device/SignalCellularConnectedNoInternet4Bar')
```



| Illustration | SignalCellularConnectedNoInternet4Bar |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/SignalCellularConnectedNoInternet4Bar.png) | ![illustration for SignalCellularConnectedNoInternet4Bar](../../material/Device/SignalCellularConnectedNoInternet4Bar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalCellularConnectedNoInternet4BarXs>`
- `<$SignalCellularConnectedNoInternet4BarSm>`
- `<$SignalCellularConnectedNoInternet4BarMd>`
- `<$SignalCellularConnectedNoInternet4BarLg>`





## SignalCellularConnectedNoInternet4Bar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SignalCellularConnectedNoInternet4Bar
include('material/Device/SignalCellularConnectedNoInternet4Bar')

' renders the element
SignalCellularConnectedNoInternet4Bar('SignalCellularConnectedNoInternet4Bar', 'Signal Cellular Connected No Internet4 Bar', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SignalCellularConnectedNoInternet4Bar
include('material/Device/SignalCellularConnectedNoInternet4Bar')

' renders the element
SignalCellularConnectedNoInternet4Bar('SignalCellularConnectedNoInternet4Bar', 'Signal Cellular Connected No Internet4 Bar', 'an optional tech label', 'an optional description')
@enduml
```

