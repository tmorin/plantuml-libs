# Speedtest


```text
simpleicons/S/Speedtest
```

```text
include('simpleicons/S/Speedtest')
```



| Illustration | Speedtest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Speedtest.png) | ![illustration for Speedtest](../../simpleicons/S/Speedtest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeedtestXs>`
- `<$SpeedtestSm>`
- `<$SpeedtestMd>`
- `<$SpeedtestLg>`





## Speedtest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Speedtest
include('simpleicons/S/Speedtest')

' renders the element
Speedtest('Speedtest', 'Speedtest', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Speedtest
include('simpleicons/S/Speedtest')

' renders the element
Speedtest('Speedtest', 'Speedtest', 'an optional tech label', 'an optional description')
@enduml
```

