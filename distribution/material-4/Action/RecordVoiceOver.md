# RecordVoiceOver


```text
material-4/Action/RecordVoiceOver
```

```text
include('material-4/Action/RecordVoiceOver')
```



| Illustration | RecordVoiceOver |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/RecordVoiceOver.png) | ![illustration for RecordVoiceOver](../../material-4/Action/RecordVoiceOver.Local.png) |




## RecordVoiceOver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RecordVoiceOver
include('material-4/Action/RecordVoiceOver')

' renders the element
RecordVoiceOver('RecordVoiceOver', 'Record Voice Over', 'an optional tech label')
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

' loads the Item which embeds the element RecordVoiceOver
include('material-4/Action/RecordVoiceOver')

' renders the element
RecordVoiceOver('RecordVoiceOver', 'Record Voice Over', 'an optional tech label')
@enduml
```

