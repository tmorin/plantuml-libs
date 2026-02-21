# SensorWindow


```text
material/Home/SensorWindow
```

```text
include('material/Home/SensorWindow')
```



| Illustration | SensorWindow |
| :---: | :---: |
| ![illustration for Illustration](../../material/Home/SensorWindow.png) | ![illustration for SensorWindow](../../material/Home/SensorWindow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SensorWindowXs>`
- `<$SensorWindowSm>`
- `<$SensorWindowMd>`
- `<$SensorWindowLg>`





## SensorWindow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SensorWindow
include('material/Home/SensorWindow')

' renders the element
SensorWindow('SensorWindow', 'Sensor Window', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SensorWindow
include('material/Home/SensorWindow')

' renders the element
SensorWindow('SensorWindow', 'Sensor Window', 'an optional tech label', 'an optional description')
@enduml
```

