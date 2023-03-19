# Itunes


```text
simpleicons-8/I/Itunes
```

```text
include('simpleicons-8/I/Itunes')
```



| Illustration | Itunes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Itunes.png) | ![illustration for Itunes](../../simpleicons-8/I/Itunes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItunesXs>`
- `<$ItunesSm>`
- `<$ItunesMd>`
- `<$ItunesLg>`





## Itunes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Itunes
include('simpleicons-8/I/Itunes')

' renders the element
Itunes('Itunes', 'Itunes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Itunes
include('simpleicons-8/I/Itunes')

' renders the element
Itunes('Itunes', 'Itunes', 'an optional tech label', 'an optional description')
@enduml
```

