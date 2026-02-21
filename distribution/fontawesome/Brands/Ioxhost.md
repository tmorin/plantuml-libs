# Ioxhost


```text
fontawesome/Brands/Ioxhost
```

```text
include('fontawesome/Brands/Ioxhost')
```



| Illustration | Ioxhost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ioxhost.png) | ![illustration for Ioxhost](../../fontawesome/Brands/Ioxhost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IoxhostXs>`
- `<$IoxhostSm>`
- `<$IoxhostMd>`
- `<$IoxhostLg>`





## Ioxhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ioxhost
include('fontawesome/Brands/Ioxhost')

' renders the element
Ioxhost('Ioxhost', 'Ioxhost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ioxhost
include('fontawesome/Brands/Ioxhost')

' renders the element
Ioxhost('Ioxhost', 'Ioxhost', 'an optional tech label', 'an optional description')
@enduml
```

