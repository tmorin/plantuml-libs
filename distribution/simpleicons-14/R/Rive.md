# Rive


```text
simpleicons-14/R/Rive
```

```text
include('simpleicons-14/R/Rive')
```



| Illustration | Rive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rive.png) | ![illustration for Rive](../../simpleicons-14/R/Rive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RiveXs>`
- `<$RiveSm>`
- `<$RiveMd>`
- `<$RiveLg>`





## Rive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rive
include('simpleicons-14/R/Rive')

' renders the element
Rive('Rive', 'Rive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rive
include('simpleicons-14/R/Rive')

' renders the element
Rive('Rive', 'Rive', 'an optional tech label', 'an optional description')
@enduml
```

