# Korvue


```text
fontawesome-5/Brands/Korvue
```

```text
include('fontawesome-5/Brands/Korvue')
```



| Illustration | Korvue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Korvue.png) | ![illustration for Korvue](../../fontawesome-5/Brands/Korvue.Local.png) |




## Korvue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Korvue
include('fontawesome-5/Brands/Korvue')

' renders the element
Korvue('Korvue', 'Korvue', 'an optional tech label')
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

' loads the Item which embeds the element Korvue
include('fontawesome-5/Brands/Korvue')

' renders the element
Korvue('Korvue', 'Korvue', 'an optional tech label')
@enduml
```

