# Rossmann


```text
simpleicons-6/R/Rossmann
```

```text
include('simpleicons-6/R/Rossmann')
```



| Illustration | Rossmann |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rossmann.png) | ![illustration for Rossmann](../../simpleicons-6/R/Rossmann.Local.png) |




## Rossmann

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rossmann
include('simpleicons-6/R/Rossmann')

' renders the element
Rossmann('Rossmann', 'Rossmann', 'an optional tech label')
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

' loads the Item which embeds the element Rossmann
include('simpleicons-6/R/Rossmann')

' renders the element
Rossmann('Rossmann', 'Rossmann', 'an optional tech label')
@enduml
```

