# Binoculars


```text
fontawesome-6/Solid/Binoculars
```

```text
include('fontawesome-6/Solid/Binoculars')
```



| Illustration | Binoculars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Binoculars.png) | ![illustration for Binoculars](../../fontawesome-6/Solid/Binoculars.Local.png) |




## Binoculars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Binoculars
include('fontawesome-6/Solid/Binoculars')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Binoculars
include('fontawesome-6/Solid/Binoculars')

' renders the element
Binoculars('Binoculars', 'Binoculars', 'an optional tech label')
@enduml
```

