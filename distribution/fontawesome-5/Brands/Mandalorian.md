# Mandalorian


```text
fontawesome-5/Brands/Mandalorian
```

```text
include('fontawesome-5/Brands/Mandalorian')
```



| Illustration | Mandalorian |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Mandalorian.png) | ![illustration for Mandalorian](../../fontawesome-5/Brands/Mandalorian.Local.png) |




## Mandalorian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mandalorian
include('fontawesome-5/Brands/Mandalorian')

' renders the element
Mandalorian('Mandalorian', 'Mandalorian', 'an optional tech label')
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

' loads the Item which embeds the element Mandalorian
include('fontawesome-5/Brands/Mandalorian')

' renders the element
Mandalorian('Mandalorian', 'Mandalorian', 'an optional tech label')
@enduml
```

