# Hexlet


```text
simpleicons/H/Hexlet
```

```text
include('simpleicons/H/Hexlet')
```



| Illustration | Hexlet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hexlet.png) | ![illustration for Hexlet](../../simpleicons/H/Hexlet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HexletXs>`
- `<$HexletSm>`
- `<$HexletMd>`
- `<$HexletLg>`





## Hexlet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hexlet
include('simpleicons/H/Hexlet')

' renders the element
Hexlet('Hexlet', 'Hexlet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hexlet
include('simpleicons/H/Hexlet')

' renders the element
Hexlet('Hexlet', 'Hexlet', 'an optional tech label', 'an optional description')
@enduml
```

