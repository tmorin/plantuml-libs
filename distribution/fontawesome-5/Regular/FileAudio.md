# FileAudio


```text
fontawesome-5/Regular/FileAudio
```

```text
include('fontawesome-5/Regular/FileAudio')
```



| Illustration | FileAudio |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/FileAudio.png) | ![illustration for FileAudio](../../fontawesome-5/Regular/FileAudio.Local.png) |




## FileAudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileAudio
include('fontawesome-5/Regular/FileAudio')

' renders the element
FileAudio('FileAudio', 'File Audio', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileAudio
include('fontawesome-5/Regular/FileAudio')

' renders the element
FileAudio('FileAudio', 'File Audio', 'an optional tech label')
@enduml
```

