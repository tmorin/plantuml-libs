# Dna


```text
fontawesome-5/Solid/Dna
```

```text
include('fontawesome-5/Solid/Dna')
```



| Illustration | Dna |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Dna.png) | ![illustration for Dna](../../fontawesome-5/Solid/Dna.Local.png) |




## Dna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dna
include('fontawesome-5/Solid/Dna')

' renders the element
Dna('Dna', 'Dna', 'an optional tech label')
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

' loads the Item which embeds the element Dna
include('fontawesome-5/Solid/Dna')

' renders the element
Dna('Dna', 'Dna', 'an optional tech label')
@enduml
```

