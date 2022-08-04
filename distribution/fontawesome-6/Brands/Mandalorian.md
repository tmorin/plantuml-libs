# Mandalorian


```text
fontawesome-6/Brands/Mandalorian
```

```text
include('fontawesome-6/Brands/Mandalorian')
```



| Illustration | Mandalorian |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Mandalorian.png) | ![illustration for Mandalorian](../../fontawesome-6/Brands/Mandalorian.Local.png) |




## Mandalorian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mandalorian
include('fontawesome-6/Brands/Mandalorian')

' renders the element
Mandalorian('Mandalorian', 'Mandalorian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mandalorian
include('fontawesome-6/Brands/Mandalorian')

' renders the element
Mandalorian('Mandalorian', 'Mandalorian', 'an optional tech label', 'an optional description')
@enduml
```

