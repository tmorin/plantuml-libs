# Ring


```text
simpleicons-6/R/Ring
```

```text
include('simpleicons-6/R/Ring')
```



| Illustration | Ring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Ring.png) | ![illustration for Ring](../../simpleicons-6/R/Ring.Local.png) |




## Ring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ring
include('simpleicons-6/R/Ring')

' renders the element
Ring('Ring', 'Ring', 'an optional tech label')
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

' loads the Item which embeds the element Ring
include('simpleicons-6/R/Ring')

' renders the element
Ring('Ring', 'Ring', 'an optional tech label')
@enduml
```

