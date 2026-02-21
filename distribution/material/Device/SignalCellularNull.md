# SignalCellularNull


```text
material/Device/SignalCellularNull
```

```text
include('material/Device/SignalCellularNull')
```



| Illustration | SignalCellularNull |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/SignalCellularNull.png) | ![illustration for SignalCellularNull](../../material/Device/SignalCellularNull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalCellularNullXs>`
- `<$SignalCellularNullSm>`
- `<$SignalCellularNullMd>`
- `<$SignalCellularNullLg>`





## SignalCellularNull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SignalCellularNull
include('material/Device/SignalCellularNull')

' renders the element
SignalCellularNull('SignalCellularNull', 'Signal Cellular Null', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalCellularNull
include('material/Device/SignalCellularNull')

' renders the element
SignalCellularNull('SignalCellularNull', 'Signal Cellular Null', 'an optional tech label', 'an optional description')
@enduml
```

