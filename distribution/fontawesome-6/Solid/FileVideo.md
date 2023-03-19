# FileVideo


```text
fontawesome-6/Solid/FileVideo
```

```text
include('fontawesome-6/Solid/FileVideo')
```



| Illustration | FileVideo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileVideo.png) | ![illustration for FileVideo](../../fontawesome-6/Solid/FileVideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileVideoXs>`
- `<$FileVideoSm>`
- `<$FileVideoMd>`
- `<$FileVideoLg>`





## FileVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileVideo
include('fontawesome-6/Solid/FileVideo')

' renders the element
FileVideo('FileVideo', 'File Video', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileVideo
include('fontawesome-6/Solid/FileVideo')

' renders the element
FileVideo('FileVideo', 'File Video', 'an optional tech label', 'an optional description')
@enduml
```

