# Wezterm


```text
simpleicons-14/W/Wezterm
```

```text
include('simpleicons-14/W/Wezterm')
```



| Illustration | Wezterm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wezterm.png) | ![illustration for Wezterm](../../simpleicons-14/W/Wezterm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WeztermXs>`
- `<$WeztermSm>`
- `<$WeztermMd>`
- `<$WeztermLg>`





## Wezterm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wezterm
include('simpleicons-14/W/Wezterm')

' renders the element
Wezterm('Wezterm', 'Wezterm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wezterm
include('simpleicons-14/W/Wezterm')

' renders the element
Wezterm('Wezterm', 'Wezterm', 'an optional tech label', 'an optional description')
@enduml
```

