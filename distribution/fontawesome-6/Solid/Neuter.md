# Neuter


```text
fontawesome-6/Solid/Neuter
```

```text
include('fontawesome-6/Solid/Neuter')
```



| Illustration | Neuter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Neuter.png) | ![illustration for Neuter](../../fontawesome-6/Solid/Neuter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeuterXs>`
- `<$NeuterSm>`
- `<$NeuterMd>`
- `<$NeuterLg>`





## Neuter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Neuter
include('fontawesome-6/Solid/Neuter')

' renders the element
Neuter('Neuter', 'Neuter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Neuter
include('fontawesome-6/Solid/Neuter')

' renders the element
Neuter('Neuter', 'Neuter', 'an optional tech label', 'an optional description')
@enduml
```

