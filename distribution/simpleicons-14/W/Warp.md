# Warp


```text
simpleicons-14/W/Warp
```

```text
include('simpleicons-14/W/Warp')
```



| Illustration | Warp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Warp.png) | ![illustration for Warp](../../simpleicons-14/W/Warp.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Warp
include('simpleicons-14/W/Warp')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Warp
include('simpleicons-14/W/Warp')

' renders the element
Warp('Warp', 'Warp', 'an optional tech label', 'an optional description')
@enduml
```

