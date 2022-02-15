# Grav


```text
fontawesome-6/Brands/Grav
```

```text
include('fontawesome-6/Brands/Grav')
```



| Illustration | Grav |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Grav.png) | ![illustration for Grav](../../fontawesome-6/Brands/Grav.Local.png) |




## Grav

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Grav
include('fontawesome-6/Brands/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label')
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

' loads the Item which embeds the element Grav
include('fontawesome-6/Brands/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label')
@enduml
```

