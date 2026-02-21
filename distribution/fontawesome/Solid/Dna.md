# Dna


```text
fontawesome/Solid/Dna
```

```text
include('fontawesome/Solid/Dna')
```



| Illustration | Dna |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dna.png) | ![illustration for Dna](../../fontawesome/Solid/Dna.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DnaXs>`
- `<$DnaSm>`
- `<$DnaMd>`
- `<$DnaLg>`





## Dna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dna
include('fontawesome/Solid/Dna')

' renders the element
Dna('Dna', 'Dna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dna
include('fontawesome/Solid/Dna')

' renders the element
Dna('Dna', 'Dna', 'an optional tech label', 'an optional description')
@enduml
```

