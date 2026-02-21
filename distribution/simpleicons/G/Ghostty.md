# Ghostty


```text
simpleicons/G/Ghostty
```

```text
include('simpleicons/G/Ghostty')
```



| Illustration | Ghostty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Ghostty.png) | ![illustration for Ghostty](../../simpleicons/G/Ghostty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GhosttyXs>`
- `<$GhosttySm>`
- `<$GhosttyMd>`
- `<$GhosttyLg>`





## Ghostty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ghostty
include('simpleicons/G/Ghostty')

' renders the element
Ghostty('Ghostty', 'Ghostty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ghostty
include('simpleicons/G/Ghostty')

' renders the element
Ghostty('Ghostty', 'Ghostty', 'an optional tech label', 'an optional description')
@enduml
```

