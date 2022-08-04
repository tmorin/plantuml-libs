# Nodered


```text
simpleicons-7/N/Nodered
```

```text
include('simpleicons-7/N/Nodered')
```



| Illustration | Nodered |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nodered.png) | ![illustration for Nodered](../../simpleicons-7/N/Nodered.Local.png) |




## Nodered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nodered
include('simpleicons-7/N/Nodered')

' renders the element
Nodered('Nodered', 'Nodered', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nodered
include('simpleicons-7/N/Nodered')

' renders the element
Nodered('Nodered', 'Nodered', 'an optional tech label', 'an optional description')
@enduml
```

