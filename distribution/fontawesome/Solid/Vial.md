# Vial


```text
fontawesome/Solid/Vial
```

```text
include('fontawesome/Solid/Vial')
```



| Illustration | Vial |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Vial.png) | ![illustration for Vial](../../fontawesome/Solid/Vial.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VialXs>`
- `<$VialSm>`
- `<$VialMd>`
- `<$VialLg>`





## Vial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Vial
include('fontawesome/Solid/Vial')

' renders the element
Vial('Vial', 'Vial', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vial
include('fontawesome/Solid/Vial')

' renders the element
Vial('Vial', 'Vial', 'an optional tech label', 'an optional description')
@enduml
```

