# Mediation


```text
material-4/Action/Mediation
```

```text
include('material-4/Action/Mediation')
```



| Illustration | Mediation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Mediation.png) | ![illustration for Mediation](../../material-4/Action/Mediation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MediationXs>`
- `<$MediationSm>`
- `<$MediationMd>`
- `<$MediationLg>`





## Mediation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Mediation
include('material-4/Action/Mediation')

' renders the element
Mediation('Mediation', 'Mediation', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Mediation
include('material-4/Action/Mediation')

' renders the element
Mediation('Mediation', 'Mediation', 'an optional tech label', 'an optional description')
@enduml
```

