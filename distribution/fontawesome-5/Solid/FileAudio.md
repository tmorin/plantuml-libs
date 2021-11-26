# FileAudio


```text
fontawesome-5/Solid/FileAudio
```

```text
include('fontawesome-5/Solid/FileAudio')
```



| Illustration | FileAudio |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileAudio.png) | ![illustration for FileAudio](../../fontawesome-5/Solid/FileAudio.Local.png) |




## FileAudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileAudio
include('fontawesome-5/Solid/FileAudio')

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
include('fontawesome-5/Solid/FileAudio')

' renders the element
FileAudio('FileAudio', 'File Audio', 'an optional tech label')
@enduml
```

