# BorderLeft


```text
material-4/Editor/BorderLeft
```

```text
include('material-4/Editor/BorderLeft')
```



| Illustration | BorderLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderLeft.png) | ![illustration for BorderLeft](../../material-4/Editor/BorderLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderLeftXs>`
- `<$BorderLeftSm>`
- `<$BorderLeftMd>`
- `<$BorderLeftLg>`





## BorderLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderLeft
include('material-4/Editor/BorderLeft')

' renders the element
BorderLeft('BorderLeft', 'Border Left', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element BorderLeft
include('material-4/Editor/BorderLeft')

' renders the element
BorderLeft('BorderLeft', 'Border Left', 'an optional tech label', 'an optional description')
@enduml
```

