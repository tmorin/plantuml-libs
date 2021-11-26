# Streetview


```text
material-4/Maps/Streetview
```

```text
include('material-4/Maps/Streetview')
```



| Illustration | Streetview |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Streetview.png) | ![illustration for Streetview](../../material-4/Maps/Streetview.Local.png) |




## Streetview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Streetview
include('material-4/Maps/Streetview')

' renders the element
Streetview('Streetview', 'Streetview', 'an optional tech label')
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

' loads the Item which embeds the element Streetview
include('material-4/Maps/Streetview')

' renders the element
Streetview('Streetview', 'Streetview', 'an optional tech label')
@enduml
```

