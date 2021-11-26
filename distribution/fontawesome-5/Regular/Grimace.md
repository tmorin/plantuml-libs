# Grimace


```text
fontawesome-5/Regular/Grimace
```

```text
include('fontawesome-5/Regular/Grimace')
```



| Illustration | Grimace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Grimace.png) | ![illustration for Grimace](../../fontawesome-5/Regular/Grimace.Local.png) |




## Grimace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Grimace
include('fontawesome-5/Regular/Grimace')

' renders the element
Grimace('Grimace', 'Grimace', 'an optional tech label')
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

' loads the Item which embeds the element Grimace
include('fontawesome-5/Regular/Grimace')

' renders the element
Grimace('Grimace', 'Grimace', 'an optional tech label')
@enduml
```

