# Periscope


```text
fontawesome-5/Brands/Periscope
```

```text
include('fontawesome-5/Brands/Periscope')
```



| Illustration | Periscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Periscope.png) | ![illustration for Periscope](../../fontawesome-5/Brands/Periscope.Local.png) |




## Periscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Periscope
include('fontawesome-5/Brands/Periscope')

' renders the element
Periscope('Periscope', 'Periscope', 'an optional tech label')
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

' loads the Item which embeds the element Periscope
include('fontawesome-5/Brands/Periscope')

' renders the element
Periscope('Periscope', 'Periscope', 'an optional tech label')
@enduml
```

