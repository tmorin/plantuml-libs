# Clickhouse


```text
simpleicons-14/C/Clickhouse
```

```text
include('simpleicons-14/C/Clickhouse')
```



| Illustration | Clickhouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Clickhouse.png) | ![illustration for Clickhouse](../../simpleicons-14/C/Clickhouse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClickhouseXs>`
- `<$ClickhouseSm>`
- `<$ClickhouseMd>`
- `<$ClickhouseLg>`





## Clickhouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Clickhouse
include('simpleicons-14/C/Clickhouse')

' renders the element
Clickhouse('Clickhouse', 'Clickhouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clickhouse
include('simpleicons-14/C/Clickhouse')

' renders the element
Clickhouse('Clickhouse', 'Clickhouse', 'an optional tech label', 'an optional description')
@enduml
```

