# BoxArchive


```text
fontawesome-6/Solid/BoxArchive
```

```text
include('fontawesome-6/Solid/BoxArchive')
```



| Illustration | BoxArchive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BoxArchive.png) | ![illustration for BoxArchive](../../fontawesome-6/Solid/BoxArchive.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BoxArchive
include('fontawesome-6/Solid/BoxArchive')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BoxArchive
include('fontawesome-6/Solid/BoxArchive')

' renders the element
BoxArchive('BoxArchive', 'Box Archive', 'an optional tech label', 'an optional description')
@enduml
```

