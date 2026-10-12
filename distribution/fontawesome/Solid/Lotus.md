# Lotus


```text
fontawesome/Solid/Lotus
```

```text
include('fontawesome/Solid/Lotus')
```



| Illustration | Lotus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Lotus.png) | ![illustration for Lotus](../../fontawesome/Solid/Lotus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LotusXs>`
- `<$LotusSm>`
- `<$LotusMd>`
- `<$LotusLg>`





## Lotus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lotus
include('fontawesome/Solid/Lotus')

' renders the element
Lotus('Lotus', 'Lotus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lotus
include('fontawesome/Solid/Lotus')

' renders the element
Lotus('Lotus', 'Lotus', 'an optional tech label', 'an optional description')
@enduml
```

