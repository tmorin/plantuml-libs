# Feather


```text
fontawesome-5/Solid/Feather
```

```text
include('fontawesome-5/Solid/Feather')
```



| Illustration | Feather |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Feather.png) | ![illustration for Feather](../../fontawesome-5/Solid/Feather.Local.png) |




## Feather

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Feather
include('fontawesome-5/Solid/Feather')

' renders the element
Feather('Feather', 'Feather', 'an optional tech label')
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

' loads the Item which embeds the element Feather
include('fontawesome-5/Solid/Feather')

' renders the element
Feather('Feather', 'Feather', 'an optional tech label')
@enduml
```

