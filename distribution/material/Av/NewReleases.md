# NewReleases


```text
material/Av/NewReleases
```

```text
include('material/Av/NewReleases')
```



| Illustration | NewReleases |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/NewReleases.png) | ![illustration for NewReleases](../../material/Av/NewReleases.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NewReleasesXs>`
- `<$NewReleasesSm>`
- `<$NewReleasesMd>`
- `<$NewReleasesLg>`





## NewReleases

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NewReleases
include('material/Av/NewReleases')

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
include('material/bootstrap')

' loads the Item which embeds the element NewReleases
include('material/Av/NewReleases')

' renders the element
NewReleases('NewReleases', 'New Releases', 'an optional tech label', 'an optional description')
@enduml
```

