# BoxArchive


```text
fontawesome/Solid/BoxArchive
```

```text
include('fontawesome/Solid/BoxArchive')
```



| Illustration | BoxArchive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoxArchive.png) | ![illustration for BoxArchive](../../fontawesome/Solid/BoxArchive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxArchiveXs>`
- `<$BoxArchiveSm>`
- `<$BoxArchiveMd>`
- `<$BoxArchiveLg>`





## BoxArchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoxArchive
include('fontawesome/Solid/BoxArchive')

' renders the element
BoxArchive('BoxArchive', 'Box Archive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoxArchive
include('fontawesome/Solid/BoxArchive')

' renders the element
BoxArchive('BoxArchive', 'Box Archive', 'an optional tech label', 'an optional description')
@enduml
```

