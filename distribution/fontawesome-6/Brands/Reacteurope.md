# Reacteurope


```text
fontawesome-6/Brands/Reacteurope
```

```text
include('fontawesome-6/Brands/Reacteurope')
```



| Illustration | Reacteurope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Reacteurope.png) | ![illustration for Reacteurope](../../fontawesome-6/Brands/Reacteurope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReacteuropeXs>`
- `<$ReacteuropeSm>`
- `<$ReacteuropeMd>`
- `<$ReacteuropeLg>`





## Reacteurope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Reacteurope
include('fontawesome-6/Brands/Reacteurope')

' renders the element
Reacteurope('Reacteurope', 'Reacteurope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reacteurope
include('fontawesome-6/Brands/Reacteurope')

' renders the element
Reacteurope('Reacteurope', 'Reacteurope', 'an optional tech label', 'an optional description')
@enduml
```

