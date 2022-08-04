# NewReleases


```text
material-4/Av/NewReleases
```

```text
include('material-4/Av/NewReleases')
```



| Illustration | NewReleases |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/NewReleases.png) | ![illustration for NewReleases](../../material-4/Av/NewReleases.Local.png) |




## NewReleases

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NewReleases
include('material-4/Av/NewReleases')

' renders the element
NewReleases('NewReleases', 'New Releases', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NewReleases
include('material-4/Av/NewReleases')

' renders the element
NewReleases('NewReleases', 'New Releases', 'an optional tech label', 'an optional description')
@enduml
```

