# Rootssage


```text
simpleicons-6/R/Rootssage
```

```text
include('simpleicons-6/R/Rootssage')
```



| Illustration | Rootssage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rootssage.png) | ![illustration for Rootssage](../../simpleicons-6/R/Rootssage.Local.png) |




## Rootssage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rootssage
include('simpleicons-6/R/Rootssage')

' renders the element
Rootssage('Rootssage', 'Rootssage', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rootssage
include('simpleicons-6/R/Rootssage')

' renders the element
Rootssage('Rootssage', 'Rootssage', 'an optional tech label')
@enduml
```

