# Inkscape


```text
simpleicons-8/I/Inkscape
```

```text
include('simpleicons-8/I/Inkscape')
```



| Illustration | Inkscape |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Inkscape.png) | ![illustration for Inkscape](../../simpleicons-8/I/Inkscape.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InkscapeXs>`
- `<$InkscapeSm>`
- `<$InkscapeMd>`
- `<$InkscapeLg>`





## Inkscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Inkscape
include('simpleicons-8/I/Inkscape')

' renders the element
Inkscape('Inkscape', 'Inkscape', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Inkscape
include('simpleicons-8/I/Inkscape')

' renders the element
Inkscape('Inkscape', 'Inkscape', 'an optional tech label', 'an optional description')
@enduml
```

