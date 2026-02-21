# Wrench


```text
fontawesome/Solid/Wrench
```

```text
include('fontawesome/Solid/Wrench')
```



| Illustration | Wrench |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Wrench.png) | ![illustration for Wrench](../../fontawesome/Solid/Wrench.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WrenchXs>`
- `<$WrenchSm>`
- `<$WrenchMd>`
- `<$WrenchLg>`





## Wrench

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wrench
include('fontawesome/Solid/Wrench')

' renders the element
Wrench('Wrench', 'Wrench', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wrench
include('fontawesome/Solid/Wrench')

' renders the element
Wrench('Wrench', 'Wrench', 'an optional tech label', 'an optional description')
@enduml
```

