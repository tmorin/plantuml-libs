# SpeakerGroup


```text
material-4/Hardware/SpeakerGroup
```

```text
include('material-4/Hardware/SpeakerGroup')
```



| Illustration | SpeakerGroup |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/SpeakerGroup.png) | ![illustration for SpeakerGroup](../../material-4/Hardware/SpeakerGroup.Local.png) |




## SpeakerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SpeakerGroup
include('material-4/Hardware/SpeakerGroup')

' renders the element
SpeakerGroup('SpeakerGroup', 'Speaker Group', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpeakerGroup
include('material-4/Hardware/SpeakerGroup')

' renders the element
SpeakerGroup('SpeakerGroup', 'Speaker Group', 'an optional tech label', 'an optional description')
@enduml
```

