# InternetArchive


```text
fontawesome/Brands/InternetArchive
```

```text
include('fontawesome/Brands/InternetArchive')
```



| Illustration | InternetArchive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/InternetArchive.png) | ![illustration for InternetArchive](../../fontawesome/Brands/InternetArchive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InternetArchiveXs>`
- `<$InternetArchiveSm>`
- `<$InternetArchiveMd>`
- `<$InternetArchiveLg>`





## InternetArchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element InternetArchive
include('fontawesome/Brands/InternetArchive')

' renders the element
InternetArchive('InternetArchive', 'Internet Archive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InternetArchive
include('fontawesome/Brands/InternetArchive')

' renders the element
InternetArchive('InternetArchive', 'Internet Archive', 'an optional tech label', 'an optional description')
@enduml
```

