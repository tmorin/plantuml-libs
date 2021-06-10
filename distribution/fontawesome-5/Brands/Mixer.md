# Mixer


```text
fontawesome-5/Brands/Mixer
```

```text
include('fontawesome-5/Brands/Mixer')
```



| Illustration | Mixer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Mixer.png) | ![illustration for Mixer](../../fontawesome-5/Brands/Mixer.Local.png) |




## Mixer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mixer
include('fontawesome-5/Brands/Mixer')

' renders the element
Mixer('Mixer', 'Mixer', 'an optional tech label')
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

' loads the Item which embeds the element Mixer
include('fontawesome-5/Brands/Mixer')

' renders the element
Mixer('Mixer', 'Mixer', 'an optional tech label')
@enduml
```

