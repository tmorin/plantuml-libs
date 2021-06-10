# GalacticSenate


```text
fontawesome-5/Brands/GalacticSenate
```

```text
include('fontawesome-5/Brands/GalacticSenate')
```



| Illustration | GalacticSenate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GalacticSenate.png) | ![illustration for GalacticSenate](../../fontawesome-5/Brands/GalacticSenate.Local.png) |




## GalacticSenate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GalacticSenate
include('fontawesome-5/Brands/GalacticSenate')

' renders the element
GalacticSenate('GalacticSenate', 'Galactic Senate', 'an optional tech label')
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

' loads the Item which embeds the element GalacticSenate
include('fontawesome-5/Brands/GalacticSenate')

' renders the element
GalacticSenate('GalacticSenate', 'Galactic Senate', 'an optional tech label')
@enduml
```

