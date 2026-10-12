# Albumoftheyear


```text
simpleicons/A/Albumoftheyear
```

```text
include('simpleicons/A/Albumoftheyear')
```



| Illustration | Albumoftheyear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Albumoftheyear.png) | ![illustration for Albumoftheyear](../../simpleicons/A/Albumoftheyear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlbumoftheyearXs>`
- `<$AlbumoftheyearSm>`
- `<$AlbumoftheyearMd>`
- `<$AlbumoftheyearLg>`





## Albumoftheyear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Albumoftheyear
include('simpleicons/A/Albumoftheyear')

' renders the element
Albumoftheyear('Albumoftheyear', 'Albumoftheyear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Albumoftheyear
include('simpleicons/A/Albumoftheyear')

' renders the element
Albumoftheyear('Albumoftheyear', 'Albumoftheyear', 'an optional tech label', 'an optional description')
@enduml
```

