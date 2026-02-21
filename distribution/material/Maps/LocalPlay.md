# LocalPlay


```text
material/Maps/LocalPlay
```

```text
include('material/Maps/LocalPlay')
```



| Illustration | LocalPlay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalPlay.png) | ![illustration for LocalPlay](../../material/Maps/LocalPlay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalPlayXs>`
- `<$LocalPlaySm>`
- `<$LocalPlayMd>`
- `<$LocalPlayLg>`





## LocalPlay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalPlay
include('material/Maps/LocalPlay')

' renders the element
LocalPlay('LocalPlay', 'Local Play', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalPlay
include('material/Maps/LocalPlay')

' renders the element
LocalPlay('LocalPlay', 'Local Play', 'an optional tech label', 'an optional description')
@enduml
```

