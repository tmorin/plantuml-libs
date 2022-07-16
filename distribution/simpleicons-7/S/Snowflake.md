# Snowflake


```text
simpleicons-7/S/Snowflake
```

```text
include('simpleicons-7/S/Snowflake')
```



| Illustration | Snowflake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Snowflake.png) | ![illustration for Snowflake](../../simpleicons-7/S/Snowflake.Local.png) |




## Snowflake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Snowflake
include('simpleicons-7/S/Snowflake')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Snowflake
include('simpleicons-7/S/Snowflake')

' renders the element
Snowflake('Snowflake', 'Snowflake', 'an optional tech label')
@enduml
```

