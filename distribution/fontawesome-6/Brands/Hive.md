# Hive


```text
fontawesome-6/Brands/Hive
```

```text
include('fontawesome-6/Brands/Hive')
```



| Illustration | Hive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Hive.png) | ![illustration for Hive](../../fontawesome-6/Brands/Hive.Local.png) |




## Hive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hive
include('fontawesome-6/Brands/Hive')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hive
include('fontawesome-6/Brands/Hive')

' renders the element
Hive('Hive', 'Hive', 'an optional tech label')
@enduml
```

