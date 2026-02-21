# Windsurf


```text
simpleicons-14/W/Windsurf
```

```text
include('simpleicons-14/W/Windsurf')
```



| Illustration | Windsurf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Windsurf.png) | ![illustration for Windsurf](../../simpleicons-14/W/Windsurf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindsurfXs>`
- `<$WindsurfSm>`
- `<$WindsurfMd>`
- `<$WindsurfLg>`





## Windsurf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Windsurf
include('simpleicons-14/W/Windsurf')

' renders the element
Windsurf('Windsurf', 'Windsurf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Windsurf
include('simpleicons-14/W/Windsurf')

' renders the element
Windsurf('Windsurf', 'Windsurf', 'an optional tech label', 'an optional description')
@enduml
```

