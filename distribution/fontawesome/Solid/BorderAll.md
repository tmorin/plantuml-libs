# BorderAll


```text
fontawesome/Solid/BorderAll
```

```text
include('fontawesome/Solid/BorderAll')
```



| Illustration | BorderAll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BorderAll.png) | ![illustration for BorderAll](../../fontawesome/Solid/BorderAll.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BorderAll
include('fontawesome/Solid/BorderAll')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BorderAll
include('fontawesome/Solid/BorderAll')

' renders the element
BorderAll('BorderAll', 'Border All', 'an optional tech label', 'an optional description')
@enduml
```

