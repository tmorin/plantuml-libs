# Flyway


```text
simpleicons-5/F/Flyway
```

```text
include('simpleicons-5/F/Flyway')
```



| Illustration | Flyway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Flyway.png) | ![illustration for Flyway](../../simpleicons-5/F/Flyway.Local.png) |




## Flyway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Flyway
include('simpleicons-5/F/Flyway')

' renders the element
Flyway('Flyway', 'Flyway', 'an optional tech label')
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

' loads the Item which embeds the element Flyway
include('simpleicons-5/F/Flyway')

' renders the element
Flyway('Flyway', 'Flyway', 'an optional tech label')
@enduml
```

