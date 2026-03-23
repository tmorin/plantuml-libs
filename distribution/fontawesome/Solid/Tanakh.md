# Tanakh


```text
fontawesome/Solid/Tanakh
```

```text
include('fontawesome/Solid/Tanakh')
```



| Illustration | Tanakh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tanakh.png) | ![illustration for Tanakh](../../fontawesome/Solid/Tanakh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TanakhXs>`
- `<$TanakhSm>`
- `<$TanakhMd>`
- `<$TanakhLg>`





## Tanakh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tanakh
include('fontawesome/Solid/Tanakh')

' renders the element
Tanakh('Tanakh', 'Tanakh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tanakh
include('fontawesome/Solid/Tanakh')

' renders the element
Tanakh('Tanakh', 'Tanakh', 'an optional tech label', 'an optional description')
@enduml
```

