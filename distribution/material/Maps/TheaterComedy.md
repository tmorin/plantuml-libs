# TheaterComedy


```text
material/Maps/TheaterComedy
```

```text
include('material/Maps/TheaterComedy')
```



| Illustration | TheaterComedy |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/TheaterComedy.png) | ![illustration for TheaterComedy](../../material/Maps/TheaterComedy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheaterComedyXs>`
- `<$TheaterComedySm>`
- `<$TheaterComedyMd>`
- `<$TheaterComedyLg>`





## TheaterComedy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TheaterComedy
include('material/Maps/TheaterComedy')

' renders the element
TheaterComedy('TheaterComedy', 'Theater Comedy', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element TheaterComedy
include('material/Maps/TheaterComedy')

' renders the element
TheaterComedy('TheaterComedy', 'Theater Comedy', 'an optional tech label', 'an optional description')
@enduml
```

