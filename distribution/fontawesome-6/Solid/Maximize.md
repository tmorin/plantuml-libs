# Maximize


```text
fontawesome-6/Solid/Maximize
```

```text
include('fontawesome-6/Solid/Maximize')
```



| Illustration | Maximize |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Maximize.png) | ![illustration for Maximize](../../fontawesome-6/Solid/Maximize.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaximizeXs>`
- `<$MaximizeSm>`
- `<$MaximizeMd>`
- `<$MaximizeLg>`





## Maximize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Maximize
include('fontawesome-6/Solid/Maximize')

' renders the element
Maximize('Maximize', 'Maximize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maximize
include('fontawesome-6/Solid/Maximize')

' renders the element
Maximize('Maximize', 'Maximize', 'an optional tech label', 'an optional description')
@enduml
```

