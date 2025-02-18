# Mdbook


```text
simpleicons-14/M/Mdbook
```

```text
include('simpleicons-14/M/Mdbook')
```



| Illustration | Mdbook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mdbook.png) | ![illustration for Mdbook](../../simpleicons-14/M/Mdbook.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mdbook
include('simpleicons-14/M/Mdbook')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mdbook
include('simpleicons-14/M/Mdbook')

' renders the element
Mdbook('Mdbook', 'Mdbook', 'an optional tech label', 'an optional description')
@enduml
```

