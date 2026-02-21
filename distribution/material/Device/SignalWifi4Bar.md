# SignalWifi4Bar


```text
material/Device/SignalWifi4Bar
```

```text
include('material/Device/SignalWifi4Bar')
```



| Illustration | SignalWifi4Bar |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/SignalWifi4Bar.png) | ![illustration for SignalWifi4Bar](../../material/Device/SignalWifi4Bar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalWifi4BarXs>`
- `<$SignalWifi4BarSm>`
- `<$SignalWifi4BarMd>`
- `<$SignalWifi4BarLg>`





## SignalWifi4Bar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SignalWifi4Bar
include('material/Device/SignalWifi4Bar')

' renders the element
SignalWifi4Bar('SignalWifi4Bar', 'Signal Wifi4 Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalWifi4Bar
include('material/Device/SignalWifi4Bar')

' renders the element
SignalWifi4Bar('SignalWifi4Bar', 'Signal Wifi4 Bar', 'an optional tech label', 'an optional description')
@enduml
```

