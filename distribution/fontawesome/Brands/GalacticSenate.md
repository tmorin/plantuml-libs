# GalacticSenate


```text
fontawesome/Brands/GalacticSenate
```

```text
include('fontawesome/Brands/GalacticSenate')
```



| Illustration | GalacticSenate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/GalacticSenate.png) | ![illustration for GalacticSenate](../../fontawesome/Brands/GalacticSenate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GalacticSenateXs>`
- `<$GalacticSenateSm>`
- `<$GalacticSenateMd>`
- `<$GalacticSenateLg>`





## GalacticSenate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GalacticSenate
include('fontawesome/Brands/GalacticSenate')

' renders the element
GalacticSenate('GalacticSenate', 'Galactic Senate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GalacticSenate
include('fontawesome/Brands/GalacticSenate')

' renders the element
GalacticSenate('GalacticSenate', 'Galactic Senate', 'an optional tech label', 'an optional description')
@enduml
```

