# RecordVoiceOver


```text
material/Action/RecordVoiceOver
```

```text
include('material/Action/RecordVoiceOver')
```



| Illustration | RecordVoiceOver |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RecordVoiceOver.png) | ![illustration for RecordVoiceOver](../../material/Action/RecordVoiceOver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RecordVoiceOverXs>`
- `<$RecordVoiceOverSm>`
- `<$RecordVoiceOverMd>`
- `<$RecordVoiceOverLg>`





## RecordVoiceOver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RecordVoiceOver
include('material/Action/RecordVoiceOver')

' renders the element
RecordVoiceOver('RecordVoiceOver', 'Record Voice Over', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RecordVoiceOver
include('material/Action/RecordVoiceOver')

' renders the element
RecordVoiceOver('RecordVoiceOver', 'Record Voice Over', 'an optional tech label', 'an optional description')
@enduml
```

