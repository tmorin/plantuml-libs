# LocalLibrary


```text
material/Maps/LocalLibrary
```

```text
include('material/Maps/LocalLibrary')
```



| Illustration | LocalLibrary |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalLibrary.png) | ![illustration for LocalLibrary](../../material/Maps/LocalLibrary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalLibraryXs>`
- `<$LocalLibrarySm>`
- `<$LocalLibraryMd>`
- `<$LocalLibraryLg>`





## LocalLibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalLibrary
include('material/Maps/LocalLibrary')

' renders the element
LocalLibrary('LocalLibrary', 'Local Library', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalLibrary
include('material/Maps/LocalLibrary')

' renders the element
LocalLibrary('LocalLibrary', 'Local Library', 'an optional tech label', 'an optional description')
@enduml
```

