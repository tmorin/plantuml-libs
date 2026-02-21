# Ring


```text
fontawesome/Solid/Ring
```

```text
include('fontawesome/Solid/Ring')
```



| Illustration | Ring |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ring.png) | ![illustration for Ring](../../fontawesome/Solid/Ring.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ring
include('fontawesome/Solid/Ring')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ring
include('fontawesome/Solid/Ring')

' renders the element
Ring('Ring', 'Ring', 'an optional tech label', 'an optional description')
@enduml
```

