# Bandage


```text
fontawesome-6/Solid/Bandage
```

```text
include('fontawesome-6/Solid/Bandage')
```



| Illustration | Bandage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bandage.png) | ![illustration for Bandage](../../fontawesome-6/Solid/Bandage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BandageXs>`
- `<$BandageSm>`
- `<$BandageMd>`
- `<$BandageLg>`





## Bandage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bandage
include('fontawesome-6/Solid/Bandage')

' renders the element
Bandage('Bandage', 'Bandage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bandage
include('fontawesome-6/Solid/Bandage')

' renders the element
Bandage('Bandage', 'Bandage', 'an optional tech label', 'an optional description')
@enduml
```

