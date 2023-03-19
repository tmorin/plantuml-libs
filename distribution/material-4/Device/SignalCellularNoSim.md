# SignalCellularNoSim


```text
material-4/Device/SignalCellularNoSim
```

```text
include('material-4/Device/SignalCellularNoSim')
```



| Illustration | SignalCellularNoSim |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalCellularNoSim.png) | ![illustration for SignalCellularNoSim](../../material-4/Device/SignalCellularNoSim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalCellularNoSimXs>`
- `<$SignalCellularNoSimSm>`
- `<$SignalCellularNoSimMd>`
- `<$SignalCellularNoSimLg>`





## SignalCellularNoSim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalCellularNoSim
include('material-4/Device/SignalCellularNoSim')

' renders the element
SignalCellularNoSim('SignalCellularNoSim', 'Signal Cellular No Sim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalCellularNoSim
include('material-4/Device/SignalCellularNoSim')

' renders the element
SignalCellularNoSim('SignalCellularNoSim', 'Signal Cellular No Sim', 'an optional tech label', 'an optional description')
@enduml
```

