# Levelsdotfyi


```text
simpleicons-14/L/Levelsdotfyi
```

```text
include('simpleicons-14/L/Levelsdotfyi')
```



| Illustration | Levelsdotfyi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Levelsdotfyi.png) | ![illustration for Levelsdotfyi](../../simpleicons-14/L/Levelsdotfyi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LevelsdotfyiXs>`
- `<$LevelsdotfyiSm>`
- `<$LevelsdotfyiMd>`
- `<$LevelsdotfyiLg>`





## Levelsdotfyi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Levelsdotfyi
include('simpleicons-14/L/Levelsdotfyi')

' renders the element
Levelsdotfyi('Levelsdotfyi', 'Levelsdotfyi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Levelsdotfyi
include('simpleicons-14/L/Levelsdotfyi')

' renders the element
Levelsdotfyi('Levelsdotfyi', 'Levelsdotfyi', 'an optional tech label', 'an optional description')
@enduml
```

