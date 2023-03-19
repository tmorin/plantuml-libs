# SignalCellular4Bar


```text
material-4/Device/SignalCellular4Bar
```

```text
include('material-4/Device/SignalCellular4Bar')
```



| Illustration | SignalCellular4Bar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SignalCellular4Bar.png) | ![illustration for SignalCellular4Bar](../../material-4/Device/SignalCellular4Bar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalCellular4BarXs>`
- `<$SignalCellular4BarSm>`
- `<$SignalCellular4BarMd>`
- `<$SignalCellular4BarLg>`





## SignalCellular4Bar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SignalCellular4Bar
include('material-4/Device/SignalCellular4Bar')

' renders the element
SignalCellular4Bar('SignalCellular4Bar', 'Signal Cellular4 Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalCellular4Bar
include('material-4/Device/SignalCellular4Bar')

' renders the element
SignalCellular4Bar('SignalCellular4Bar', 'Signal Cellular4 Bar', 'an optional tech label', 'an optional description')
@enduml
```

