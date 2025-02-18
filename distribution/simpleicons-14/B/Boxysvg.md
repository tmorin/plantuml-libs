# Boxysvg


```text
simpleicons-14/B/Boxysvg
```

```text
include('simpleicons-14/B/Boxysvg')
```



| Illustration | Boxysvg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Boxysvg.png) | ![illustration for Boxysvg](../../simpleicons-14/B/Boxysvg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxysvgXs>`
- `<$BoxysvgSm>`
- `<$BoxysvgMd>`
- `<$BoxysvgLg>`





## Boxysvg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Boxysvg
include('simpleicons-14/B/Boxysvg')

' renders the element
Boxysvg('Boxysvg', 'Boxysvg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boxysvg
include('simpleicons-14/B/Boxysvg')

' renders the element
Boxysvg('Boxysvg', 'Boxysvg', 'an optional tech label', 'an optional description')
@enduml
```

