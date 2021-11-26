# Seagate


```text
simpleicons-5/S/Seagate
```

```text
include('simpleicons-5/S/Seagate')
```



| Illustration | Seagate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Seagate.png) | ![illustration for Seagate](../../simpleicons-5/S/Seagate.Local.png) |




## Seagate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Seagate
include('simpleicons-5/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label')
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

' loads the Item which embeds the element Seagate
include('simpleicons-5/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label')
@enduml
```

