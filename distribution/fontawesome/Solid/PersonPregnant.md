# PersonPregnant


```text
fontawesome/Solid/PersonPregnant
```

```text
include('fontawesome/Solid/PersonPregnant')
```



| Illustration | PersonPregnant |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonPregnant.png) | ![illustration for PersonPregnant](../../fontawesome/Solid/PersonPregnant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonPregnantXs>`
- `<$PersonPregnantSm>`
- `<$PersonPregnantMd>`
- `<$PersonPregnantLg>`





## PersonPregnant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonPregnant
include('fontawesome/Solid/PersonPregnant')

' renders the element
PersonPregnant('PersonPregnant', 'Person Pregnant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonPregnant
include('fontawesome/Solid/PersonPregnant')

' renders the element
PersonPregnant('PersonPregnant', 'Person Pregnant', 'an optional tech label', 'an optional description')
@enduml
```

