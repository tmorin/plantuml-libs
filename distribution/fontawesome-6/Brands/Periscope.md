# Periscope


```text
fontawesome-6/Brands/Periscope
```

```text
include('fontawesome-6/Brands/Periscope')
```



| Illustration | Periscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Periscope.png) | ![illustration for Periscope](../../fontawesome-6/Brands/Periscope.Local.png) |




## Periscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Periscope
include('fontawesome-6/Brands/Periscope')

' renders the element
Periscope('Periscope', 'Periscope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Periscope
include('fontawesome-6/Brands/Periscope')

' renders the element
Periscope('Periscope', 'Periscope', 'an optional tech label', 'an optional description')
@enduml
```

