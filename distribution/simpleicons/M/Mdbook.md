# Mdbook


```text
simpleicons/M/Mdbook
```

```text
include('simpleicons/M/Mdbook')
```



| Illustration | Mdbook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mdbook.png) | ![illustration for Mdbook](../../simpleicons/M/Mdbook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MdbookXs>`
- `<$MdbookSm>`
- `<$MdbookMd>`
- `<$MdbookLg>`





## Mdbook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mdbook
include('simpleicons/M/Mdbook')

' renders the element
Mdbook('Mdbook', 'Mdbook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mdbook
include('simpleicons/M/Mdbook')

' renders the element
Mdbook('Mdbook', 'Mdbook', 'an optional tech label', 'an optional description')
@enduml
```

