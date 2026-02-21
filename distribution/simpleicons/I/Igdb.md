# Igdb


```text
simpleicons/I/Igdb
```

```text
include('simpleicons/I/Igdb')
```



| Illustration | Igdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Igdb.png) | ![illustration for Igdb](../../simpleicons/I/Igdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IgdbXs>`
- `<$IgdbSm>`
- `<$IgdbMd>`
- `<$IgdbLg>`





## Igdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Igdb
include('simpleicons/I/Igdb')

' renders the element
Igdb('Igdb', 'Igdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Igdb
include('simpleicons/I/Igdb')

' renders the element
Igdb('Igdb', 'Igdb', 'an optional tech label', 'an optional description')
@enduml
```

