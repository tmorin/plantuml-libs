# Minimize


```text
fontawesome/Solid/Minimize
```

```text
include('fontawesome/Solid/Minimize')
```



| Illustration | Minimize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Minimize.png) | ![illustration for Minimize](../../fontawesome/Solid/Minimize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MinimizeXs>`
- `<$MinimizeSm>`
- `<$MinimizeMd>`
- `<$MinimizeLg>`





## Minimize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Minimize
include('fontawesome/Solid/Minimize')

' renders the element
Minimize('Minimize', 'Minimize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Minimize
include('fontawesome/Solid/Minimize')

' renders the element
Minimize('Minimize', 'Minimize', 'an optional tech label', 'an optional description')
@enduml
```

