# Pushed


```text
fontawesome/Brands/Pushed
```

```text
include('fontawesome/Brands/Pushed')
```



| Illustration | Pushed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Pushed.png) | ![illustration for Pushed](../../fontawesome/Brands/Pushed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PushedXs>`
- `<$PushedSm>`
- `<$PushedMd>`
- `<$PushedLg>`





## Pushed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pushed
include('fontawesome/Brands/Pushed')

' renders the element
Pushed('Pushed', 'Pushed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pushed
include('fontawesome/Brands/Pushed')

' renders the element
Pushed('Pushed', 'Pushed', 'an optional tech label', 'an optional description')
@enduml
```

