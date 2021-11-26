# Nodered


```text
simpleicons-5/N/Nodered
```

```text
include('simpleicons-5/N/Nodered')
```



| Illustration | Nodered |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nodered.png) | ![illustration for Nodered](../../simpleicons-5/N/Nodered.Local.png) |




## Nodered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nodered
include('simpleicons-5/N/Nodered')

' renders the element
Nodered('Nodered', 'Nodered', 'an optional tech label')
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

' loads the Item which embeds the element Nodered
include('simpleicons-5/N/Nodered')

' renders the element
Nodered('Nodered', 'Nodered', 'an optional tech label')
@enduml
```

