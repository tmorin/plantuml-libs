# SpeakerGroup


```text
material/Hardware/SpeakerGroup
```

```text
include('material/Hardware/SpeakerGroup')
```



| Illustration | SpeakerGroup |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/SpeakerGroup.png) | ![illustration for SpeakerGroup](../../material/Hardware/SpeakerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeakerGroupXs>`
- `<$SpeakerGroupSm>`
- `<$SpeakerGroupMd>`
- `<$SpeakerGroupLg>`





## SpeakerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SpeakerGroup
include('material/Hardware/SpeakerGroup')

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
include('material/bootstrap')

' loads the Item which embeds the element SpeakerGroup
include('material/Hardware/SpeakerGroup')

' renders the element
SpeakerGroup('SpeakerGroup', 'Speaker Group', 'an optional tech label', 'an optional description')
@enduml
```

