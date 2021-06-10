# Drum


```text
fontawesome-5/Solid/Drum
```

```text
include('fontawesome-5/Solid/Drum')
```



| Illustration | Drum |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Drum.png) | ![illustration for Drum](../../fontawesome-5/Solid/Drum.Local.png) |




## Drum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Drum
include('fontawesome-5/Solid/Drum')

' renders the element
Drum('Drum', 'Drum', 'an optional tech label')
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

' loads the Item which embeds the element Drum
include('fontawesome-5/Solid/Drum')

' renders the element
Drum('Drum', 'Drum', 'an optional tech label')
@enduml
```

