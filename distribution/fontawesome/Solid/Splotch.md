# Splotch


```text
fontawesome/Solid/Splotch
```

```text
include('fontawesome/Solid/Splotch')
```



| Illustration | Splotch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Splotch.png) | ![illustration for Splotch](../../fontawesome/Solid/Splotch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SplotchXs>`
- `<$SplotchSm>`
- `<$SplotchMd>`
- `<$SplotchLg>`





## Splotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Splotch
include('fontawesome/Solid/Splotch')

' renders the element
Splotch('Splotch', 'Splotch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Splotch
include('fontawesome/Solid/Splotch')

' renders the element
Splotch('Splotch', 'Splotch', 'an optional tech label', 'an optional description')
@enduml
```

