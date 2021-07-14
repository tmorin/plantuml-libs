# Hive


```text
simpleicons-5/H/Hive
```

```text
include('simpleicons-5/H/Hive')
```



| Illustration | Hive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hive.png) | ![illustration for Hive](../../simpleicons-5/H/Hive.Local.png) |




## Hive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hive
include('simpleicons-5/H/Hive')

' renders the element
Hive('Hive', 'Hive', 'an optional tech label')
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

' loads the Item which embeds the element Hive
include('simpleicons-5/H/Hive')

' renders the element
Hive('Hive', 'Hive', 'an optional tech label')
@enduml
```

