# Raycast


```text
simpleicons-14/R/Raycast
```

```text
include('simpleicons-14/R/Raycast')
```



| Illustration | Raycast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Raycast.png) | ![illustration for Raycast](../../simpleicons-14/R/Raycast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RaycastXs>`
- `<$RaycastSm>`
- `<$RaycastMd>`
- `<$RaycastLg>`





## Raycast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Raycast
include('simpleicons-14/R/Raycast')

' renders the element
Raycast('Raycast', 'Raycast', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Raycast
include('simpleicons-14/R/Raycast')

' renders the element
Raycast('Raycast', 'Raycast', 'an optional tech label', 'an optional description')
@enduml
```

