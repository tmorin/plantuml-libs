# Warp


```text
simpleicons/W/Warp
```

```text
include('simpleicons/W/Warp')
```



| Illustration | Warp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Warp.png) | ![illustration for Warp](../../simpleicons/W/Warp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WarpXs>`
- `<$WarpSm>`
- `<$WarpMd>`
- `<$WarpLg>`





## Warp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Warp
include('simpleicons/W/Warp')

' renders the element
Warp('Warp', 'Warp', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Warp
include('simpleicons/W/Warp')

' renders the element
Warp('Warp', 'Warp', 'an optional tech label', 'an optional description')
@enduml
```

