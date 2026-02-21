# Speaker


```text
material/Hardware/Speaker
```

```text
include('material/Hardware/Speaker')
```



| Illustration | Speaker |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Speaker.png) | ![illustration for Speaker](../../material/Hardware/Speaker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeakerXs>`
- `<$SpeakerSm>`
- `<$SpeakerMd>`
- `<$SpeakerLg>`





## Speaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Speaker
include('material/Hardware/Speaker')

' renders the element
Speaker('Speaker', 'Speaker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Speaker
include('material/Hardware/Speaker')

' renders the element
Speaker('Speaker', 'Speaker', 'an optional tech label', 'an optional description')
@enduml
```

