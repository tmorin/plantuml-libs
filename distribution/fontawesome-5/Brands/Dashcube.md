# Dashcube


```text
fontawesome-5/Brands/Dashcube
```

```text
include('fontawesome-5/Brands/Dashcube')
```



| Illustration | Dashcube |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Dashcube.png) | ![illustration for Dashcube](../../fontawesome-5/Brands/Dashcube.Local.png) |




## Dashcube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dashcube
include('fontawesome-5/Brands/Dashcube')

' renders the element
Dashcube('Dashcube', 'Dashcube', 'an optional tech label')
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

' loads the Item which embeds the element Dashcube
include('fontawesome-5/Brands/Dashcube')

' renders the element
Dashcube('Dashcube', 'Dashcube', 'an optional tech label')
@enduml
```

