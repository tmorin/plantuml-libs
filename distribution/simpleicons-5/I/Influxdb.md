# Influxdb


```text
simpleicons-5/I/Influxdb
```

```text
include('simpleicons-5/I/Influxdb')
```



| Illustration | Influxdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Influxdb.png) | ![illustration for Influxdb](../../simpleicons-5/I/Influxdb.Local.png) |




## Influxdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Influxdb
include('simpleicons-5/I/Influxdb')

' renders the element
Influxdb('Influxdb', 'Influxdb', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Influxdb
include('simpleicons-5/I/Influxdb')

' renders the element
Influxdb('Influxdb', 'Influxdb', 'an optional tech label')
@enduml
```

