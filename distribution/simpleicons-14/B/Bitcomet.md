# Bitcomet


```text
simpleicons-14/B/Bitcomet
```

```text
include('simpleicons-14/B/Bitcomet')
```



| Illustration | Bitcomet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bitcomet.png) | ![illustration for Bitcomet](../../simpleicons-14/B/Bitcomet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitcometXs>`
- `<$BitcometSm>`
- `<$BitcometMd>`
- `<$BitcometLg>`





## Bitcomet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bitcomet
include('simpleicons-14/B/Bitcomet')

' renders the element
Bitcomet('Bitcomet', 'Bitcomet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitcomet
include('simpleicons-14/B/Bitcomet')

' renders the element
Bitcomet('Bitcomet', 'Bitcomet', 'an optional tech label', 'an optional description')
@enduml
```

