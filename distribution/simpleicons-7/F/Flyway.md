# Flyway


```text
simpleicons-7/F/Flyway
```

```text
include('simpleicons-7/F/Flyway')
```



| Illustration | Flyway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Flyway.png) | ![illustration for Flyway](../../simpleicons-7/F/Flyway.Local.png) |




## Flyway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Flyway
include('simpleicons-7/F/Flyway')

' renders the element
Flyway('Flyway', 'Flyway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flyway
include('simpleicons-7/F/Flyway')

' renders the element
Flyway('Flyway', 'Flyway', 'an optional tech label', 'an optional description')
@enduml
```

