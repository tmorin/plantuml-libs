# SignalCellularOff


```text
material/Device/SignalCellularOff
```

```text
include('material/Device/SignalCellularOff')
```



| Illustration | SignalCellularOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/SignalCellularOff.png) | ![illustration for SignalCellularOff](../../material/Device/SignalCellularOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalCellularOffXs>`
- `<$SignalCellularOffSm>`
- `<$SignalCellularOffMd>`
- `<$SignalCellularOffLg>`





## SignalCellularOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SignalCellularOff
include('material/Device/SignalCellularOff')

' renders the element
SignalCellularOff('SignalCellularOff', 'Signal Cellular Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalCellularOff
include('material/Device/SignalCellularOff')

' renders the element
SignalCellularOff('SignalCellularOff', 'Signal Cellular Off', 'an optional tech label', 'an optional description')
@enduml
```

