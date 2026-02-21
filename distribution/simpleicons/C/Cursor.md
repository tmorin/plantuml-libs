# Cursor


```text
simpleicons/C/Cursor
```

```text
include('simpleicons/C/Cursor')
```



| Illustration | Cursor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cursor.png) | ![illustration for Cursor](../../simpleicons/C/Cursor.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cursor
include('simpleicons/C/Cursor')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cursor
include('simpleicons/C/Cursor')

' renders the element
Cursor('Cursor', 'Cursor', 'an optional tech label', 'an optional description')
@enduml
```

