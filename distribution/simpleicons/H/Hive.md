# Hive


```text
simpleicons/H/Hive
```

```text
include('simpleicons/H/Hive')
```



| Illustration | Hive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hive.png) | ![illustration for Hive](../../simpleicons/H/Hive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HiveXs>`
- `<$HiveSm>`
- `<$HiveMd>`
- `<$HiveLg>`





## Hive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hive
include('simpleicons/H/Hive')

' renders the element
Hive('Hive', 'Hive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hive
include('simpleicons/H/Hive')

' renders the element
Hive('Hive', 'Hive', 'an optional tech label', 'an optional description')
@enduml
```

