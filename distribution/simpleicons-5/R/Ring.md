# Ring


```text
simpleicons-5/R/Ring
```

```text
include('simpleicons-5/R/Ring')
```



| Illustration | Ring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Ring.png) | ![illustration for Ring](../../simpleicons-5/R/Ring.Local.png) |




## Ring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ring
include('simpleicons-5/R/Ring')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ring
include('simpleicons-5/R/Ring')

' renders the element
Ring('Ring', 'Ring', 'an optional tech label')
@enduml
```

