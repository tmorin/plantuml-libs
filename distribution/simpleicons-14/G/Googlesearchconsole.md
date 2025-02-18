# Googlesearchconsole


```text
simpleicons-14/G/Googlesearchconsole
```

```text
include('simpleicons-14/G/Googlesearchconsole')
```



| Illustration | Googlesearchconsole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlesearchconsole.png) | ![illustration for Googlesearchconsole](../../simpleicons-14/G/Googlesearchconsole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglesearchconsoleXs>`
- `<$GooglesearchconsoleSm>`
- `<$GooglesearchconsoleMd>`
- `<$GooglesearchconsoleLg>`





## Googlesearchconsole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlesearchconsole
include('simpleicons-14/G/Googlesearchconsole')

' renders the element
Googlesearchconsole('Googlesearchconsole', 'Googlesearchconsole', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlesearchconsole
include('simpleicons-14/G/Googlesearchconsole')

' renders the element
Googlesearchconsole('Googlesearchconsole', 'Googlesearchconsole', 'an optional tech label', 'an optional description')
@enduml
```

