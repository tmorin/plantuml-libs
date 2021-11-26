# NoPhotography


```text
material-4/Places/NoPhotography
```

```text
include('material-4/Places/NoPhotography')
```



| Illustration | NoPhotography |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/NoPhotography.png) | ![illustration for NoPhotography](../../material-4/Places/NoPhotography.Local.png) |




## NoPhotography

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoPhotography
include('material-4/Places/NoPhotography')

' renders the element
NoPhotography('NoPhotography', 'No Photography', 'an optional tech label')
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

' loads the Item which embeds the element NoPhotography
include('material-4/Places/NoPhotography')

' renders the element
NoPhotography('NoPhotography', 'No Photography', 'an optional tech label')
@enduml
```

