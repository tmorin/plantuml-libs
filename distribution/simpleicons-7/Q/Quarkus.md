# Quarkus


```text
simpleicons-7/Q/Quarkus
```

```text
include('simpleicons-7/Q/Quarkus')
```



| Illustration | Quarkus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Q/Quarkus.png) | ![illustration for Quarkus](../../simpleicons-7/Q/Quarkus.Local.png) |




## Quarkus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Quarkus
include('simpleicons-7/Q/Quarkus')

' renders the element
Quarkus('Quarkus', 'Quarkus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quarkus
include('simpleicons-7/Q/Quarkus')

' renders the element
Quarkus('Quarkus', 'Quarkus', 'an optional tech label', 'an optional description')
@enduml
```

