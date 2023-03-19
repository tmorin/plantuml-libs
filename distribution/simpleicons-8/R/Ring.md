# Ring


```text
simpleicons-8/R/Ring
```

```text
include('simpleicons-8/R/Ring')
```



| Illustration | Ring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Ring.png) | ![illustration for Ring](../../simpleicons-8/R/Ring.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RingXs>`
- `<$RingSm>`
- `<$RingMd>`
- `<$RingLg>`





## Ring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ring
include('simpleicons-8/R/Ring')

' renders the element
Ring('Ring', 'Ring', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ring
include('simpleicons-8/R/Ring')

' renders the element
Ring('Ring', 'Ring', 'an optional tech label', 'an optional description')
@enduml
```

