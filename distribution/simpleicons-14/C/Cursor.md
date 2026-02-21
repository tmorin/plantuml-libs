# Cursor


```text
simpleicons-14/C/Cursor
```

```text
include('simpleicons-14/C/Cursor')
```



| Illustration | Cursor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cursor.png) | ![illustration for Cursor](../../simpleicons-14/C/Cursor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CursorXs>`
- `<$CursorSm>`
- `<$CursorMd>`
- `<$CursorLg>`





## Cursor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cursor
include('simpleicons-14/C/Cursor')

' renders the element
Cursor('Cursor', 'Cursor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cursor
include('simpleicons-14/C/Cursor')

' renders the element
Cursor('Cursor', 'Cursor', 'an optional tech label', 'an optional description')
@enduml
```

