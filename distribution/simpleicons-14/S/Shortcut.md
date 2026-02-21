# Shortcut


```text
simpleicons-14/S/Shortcut
```

```text
include('simpleicons-14/S/Shortcut')
```



| Illustration | Shortcut |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shortcut.png) | ![illustration for Shortcut](../../simpleicons-14/S/Shortcut.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShortcutXs>`
- `<$ShortcutSm>`
- `<$ShortcutMd>`
- `<$ShortcutLg>`





## Shortcut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shortcut
include('simpleicons-14/S/Shortcut')

' renders the element
Shortcut('Shortcut', 'Shortcut', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shortcut
include('simpleicons-14/S/Shortcut')

' renders the element
Shortcut('Shortcut', 'Shortcut', 'an optional tech label', 'an optional description')
@enduml
```

