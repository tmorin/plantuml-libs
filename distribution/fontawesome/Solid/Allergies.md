# Allergies


```text
fontawesome/Solid/Allergies
```

```text
include('fontawesome/Solid/Allergies')
```



| Illustration | Allergies |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Allergies.png) | ![illustration for Allergies](../../fontawesome/Solid/Allergies.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AllergiesXs>`
- `<$AllergiesSm>`
- `<$AllergiesMd>`
- `<$AllergiesLg>`





## Allergies

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Allergies
include('fontawesome/Solid/Allergies')

' renders the element
Allergies('Allergies', 'Allergies', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Allergies
include('fontawesome/Solid/Allergies')

' renders the element
Allergies('Allergies', 'Allergies', 'an optional tech label', 'an optional description')
@enduml
```

