# VideoSlash


```text
fontawesome-6/Solid/VideoSlash
```

```text
include('fontawesome-6/Solid/VideoSlash')
```



| Illustration | VideoSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VideoSlash.png) | ![illustration for VideoSlash](../../fontawesome-6/Solid/VideoSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideoSlashXs>`
- `<$VideoSlashSm>`
- `<$VideoSlashMd>`
- `<$VideoSlashLg>`





## VideoSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VideoSlash
include('fontawesome-6/Solid/VideoSlash')

' renders the element
VideoSlash('VideoSlash', 'Video Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VideoSlash
include('fontawesome-6/Solid/VideoSlash')

' renders the element
VideoSlash('VideoSlash', 'Video Slash', 'an optional tech label', 'an optional description')
@enduml
```

