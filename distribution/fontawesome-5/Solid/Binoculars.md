# Binoculars


```text
fontawesome-5/Solid/Binoculars
```

```text
include('fontawesome-5/Solid/Binoculars')
```



| Illustration | Binoculars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Binoculars.png) | ![illustration for Binoculars](../../fontawesome-5/Solid/Binoculars.Local.png) |




## Binoculars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Binoculars
include('fontawesome-5/Solid/Binoculars')

' renders the element
Binoculars('Binoculars', 'Binoculars', 'an optional tech label')
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

' loads the Item which embeds the element Binoculars
include('fontawesome-5/Solid/Binoculars')

' renders the element
Binoculars('Binoculars', 'Binoculars', 'an optional tech label')
@enduml
```

