# Snowflake


```text
fontawesome-5/Solid/Snowflake
```

```text
include('fontawesome-5/Solid/Snowflake')
```



| Illustration | Snowflake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Snowflake.png) | ![illustration for Snowflake](../../fontawesome-5/Solid/Snowflake.Local.png) |




## Snowflake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Snowflake
include('fontawesome-5/Solid/Snowflake')

' renders the element
Snowflake('Snowflake', 'Snowflake', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Snowflake
include('fontawesome-5/Solid/Snowflake')

' renders the element
Snowflake('Snowflake', 'Snowflake', 'an optional tech label')
@enduml
```

