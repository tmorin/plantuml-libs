# AudioDescription


```text
fontawesome-5/Solid/AudioDescription
```

```text
include('fontawesome-5/Solid/AudioDescription')
```



| Illustration | AudioDescription |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AudioDescription.png) | ![illustration for AudioDescription](../../fontawesome-5/Solid/AudioDescription.Local.png) |




## AudioDescription

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AudioDescription
include('fontawesome-5/Solid/AudioDescription')

' renders the element
AudioDescription('AudioDescription', 'Audio Description', 'an optional tech label')
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

' loads the Item which embeds the element AudioDescription
include('fontawesome-5/Solid/AudioDescription')

' renders the element
AudioDescription('AudioDescription', 'Audio Description', 'an optional tech label')
@enduml
```

