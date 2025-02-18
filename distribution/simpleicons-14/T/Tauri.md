# Tauri


```text
simpleicons-14/T/Tauri
```

```text
include('simpleicons-14/T/Tauri')
```



| Illustration | Tauri |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tauri.png) | ![illustration for Tauri](../../simpleicons-14/T/Tauri.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TauriXs>`
- `<$TauriSm>`
- `<$TauriMd>`
- `<$TauriLg>`





## Tauri

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tauri
include('simpleicons-14/T/Tauri')

' renders the element
Tauri('Tauri', 'Tauri', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tauri
include('simpleicons-14/T/Tauri')

' renders the element
Tauri('Tauri', 'Tauri', 'an optional tech label', 'an optional description')
@enduml
```

