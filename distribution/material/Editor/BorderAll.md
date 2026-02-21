# BorderAll


```text
material/Editor/BorderAll
```

```text
include('material/Editor/BorderAll')
```



| Illustration | BorderAll |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/BorderAll.png) | ![illustration for BorderAll](../../material/Editor/BorderAll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderAllXs>`
- `<$BorderAllSm>`
- `<$BorderAllMd>`
- `<$BorderAllLg>`





## BorderAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BorderAll
include('material/Editor/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderAll
include('material/Editor/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label', 'an optional description')
@enduml
```

