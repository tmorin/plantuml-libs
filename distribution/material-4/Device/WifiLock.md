# WifiLock


```text
material-4/Device/WifiLock
```

```text
include('material-4/Device/WifiLock')
```



| Illustration | WifiLock |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/WifiLock.png) | ![illustration for WifiLock](../../material-4/Device/WifiLock.Local.png) |




## WifiLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WifiLock
include('material-4/Device/WifiLock')

' renders the element
WifiLock('WifiLock', 'Wifi Lock', 'an optional tech label')
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

' loads the Item which embeds the element WifiLock
include('material-4/Device/WifiLock')

' renders the element
WifiLock('WifiLock', 'Wifi Lock', 'an optional tech label')
@enduml
```

