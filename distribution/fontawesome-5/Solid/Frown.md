# Frown


```text
fontawesome-5/Solid/Frown
```

```text
include('fontawesome-5/Solid/Frown')
```



| Illustration | Frown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Frown.png) | ![illustration for Frown](../../fontawesome-5/Solid/Frown.Local.png) |




## Frown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Frown
include('fontawesome-5/Solid/Frown')

' renders the element
Frown('Frown', 'Frown', 'an optional tech label')
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

' loads the Item which embeds the element Frown
include('fontawesome-5/Solid/Frown')

' renders the element
Frown('Frown', 'Frown', 'an optional tech label')
@enduml
```

