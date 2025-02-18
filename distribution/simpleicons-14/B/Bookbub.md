# Bookbub


```text
simpleicons-14/B/Bookbub
```

```text
include('simpleicons-14/B/Bookbub')
```



| Illustration | Bookbub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bookbub.png) | ![illustration for Bookbub](../../simpleicons-14/B/Bookbub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookbubXs>`
- `<$BookbubSm>`
- `<$BookbubMd>`
- `<$BookbubLg>`





## Bookbub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bookbub
include('simpleicons-14/B/Bookbub')

' renders the element
Bookbub('Bookbub', 'Bookbub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bookbub
include('simpleicons-14/B/Bookbub')

' renders the element
Bookbub('Bookbub', 'Bookbub', 'an optional tech label', 'an optional description')
@enduml
```

