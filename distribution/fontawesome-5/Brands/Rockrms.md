# Rockrms


```text
fontawesome-5/Brands/Rockrms
```

```text
include('fontawesome-5/Brands/Rockrms')
```



| Illustration | Rockrms |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Rockrms.png) | ![illustration for Rockrms](../../fontawesome-5/Brands/Rockrms.Local.png) |




## Rockrms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Rockrms
include('fontawesome-5/Brands/Rockrms')

' renders the element
Rockrms('Rockrms', 'Rockrms', 'an optional tech label')
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

' loads the Item which embeds the element Rockrms
include('fontawesome-5/Brands/Rockrms')

' renders the element
Rockrms('Rockrms', 'Rockrms', 'an optional tech label')
@enduml
```

