# AudioDescription


```text
fontawesome-6/Solid/AudioDescription
```

```text
include('fontawesome-6/Solid/AudioDescription')
```



| Illustration | AudioDescription |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AudioDescription.png) | ![illustration for AudioDescription](../../fontawesome-6/Solid/AudioDescription.Local.png) |




## AudioDescription

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AudioDescription
include('fontawesome-6/Solid/AudioDescription')

' renders the element
AudioDescription('AudioDescription', 'Audio Description', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AudioDescription
include('fontawesome-6/Solid/AudioDescription')

' renders the element
AudioDescription('AudioDescription', 'Audio Description', 'an optional tech label', 'an optional description')
@enduml
```

