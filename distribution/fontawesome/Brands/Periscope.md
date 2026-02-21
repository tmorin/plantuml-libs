# Periscope


```text
fontawesome/Brands/Periscope
```

```text
include('fontawesome/Brands/Periscope')
```



| Illustration | Periscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Periscope.png) | ![illustration for Periscope](../../fontawesome/Brands/Periscope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeriscopeXs>`
- `<$PeriscopeSm>`
- `<$PeriscopeMd>`
- `<$PeriscopeLg>`





## Periscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Periscope
include('fontawesome/Brands/Periscope')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Periscope
include('fontawesome/Brands/Periscope')

' renders the element
Periscope('Periscope', 'Periscope', 'an optional tech label', 'an optional description')
@enduml
```

