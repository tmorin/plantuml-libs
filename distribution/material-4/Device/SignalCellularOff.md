# SignalCellularOff


```text
material-4/Device/SignalCellularOff
```

```text
include('material-4/Device/SignalCellularOff')
```



| Illustration | SignalCellularOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalCellularOff.png) | ![illustration for SignalCellularOff](../../material-4/Device/SignalCellularOff.Local.png) |




## SignalCellularOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalCellularOff
include('material-4/Device/SignalCellularOff')

' renders the element
SignalCellularOff('SignalCellularOff', 'Signal Cellular Off', 'an optional tech label')
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

' loads the Item which embeds the element SignalCellularOff
include('material-4/Device/SignalCellularOff')

' renders the element
SignalCellularOff('SignalCellularOff', 'Signal Cellular Off', 'an optional tech label')
@enduml
```

