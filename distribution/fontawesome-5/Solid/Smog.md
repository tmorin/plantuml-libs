# Smog


```text
fontawesome-5/Solid/Smog
```

```text
include('fontawesome-5/Solid/Smog')
```



| Illustration | Smog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Smog.png) | ![illustration for Smog](../../fontawesome-5/Solid/Smog.Local.png) |




## Smog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Smog
include('fontawesome-5/Solid/Smog')

' renders the element
Smog('Smog', 'Smog', 'an optional tech label')
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

' loads the Item which embeds the element Smog
include('fontawesome-5/Solid/Smog')

' renders the element
Smog('Smog', 'Smog', 'an optional tech label')
@enduml
```

