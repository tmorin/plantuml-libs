# Blind


```text
fontawesome/Solid/Blind
```

```text
include('fontawesome/Solid/Blind')
```



| Illustration | Blind |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Blind.png) | ![illustration for Blind](../../fontawesome/Solid/Blind.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlindXs>`
- `<$BlindSm>`
- `<$BlindMd>`
- `<$BlindLg>`





## Blind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Blind
include('fontawesome/Solid/Blind')

' renders the element
Blind('Blind', 'Blind', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blind
include('fontawesome/Solid/Blind')

' renders the element
Blind('Blind', 'Blind', 'an optional tech label', 'an optional description')
@enduml
```

