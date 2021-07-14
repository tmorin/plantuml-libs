# Saltstack


```text
simpleicons-5/S/Saltstack
```

```text
include('simpleicons-5/S/Saltstack')
```



| Illustration | Saltstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Saltstack.png) | ![illustration for Saltstack](../../simpleicons-5/S/Saltstack.Local.png) |




## Saltstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Saltstack
include('simpleicons-5/S/Saltstack')

' renders the element
Saltstack('Saltstack', 'Saltstack', 'an optional tech label')
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

' loads the Item which embeds the element Saltstack
include('simpleicons-5/S/Saltstack')

' renders the element
Saltstack('Saltstack', 'Saltstack', 'an optional tech label')
@enduml
```

