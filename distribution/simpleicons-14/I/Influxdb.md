# Influxdb


```text
simpleicons-14/I/Influxdb
```

```text
include('simpleicons-14/I/Influxdb')
```



| Illustration | Influxdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Influxdb.png) | ![illustration for Influxdb](../../simpleicons-14/I/Influxdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfluxdbXs>`
- `<$InfluxdbSm>`
- `<$InfluxdbMd>`
- `<$InfluxdbLg>`





## Influxdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Influxdb
include('simpleicons-14/I/Influxdb')

' renders the element
Influxdb('Influxdb', 'Influxdb', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Influxdb
include('simpleicons-14/I/Influxdb')

' renders the element
Influxdb('Influxdb', 'Influxdb', 'an optional tech label', 'an optional description')
@enduml
```

