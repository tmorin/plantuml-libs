# Grain


```text
material/Image/Grain
```

```text
include('material/Image/Grain')
```



| Illustration | Grain |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Grain.png) | ![illustration for Grain](../../material/Image/Grain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrainXs>`
- `<$GrainSm>`
- `<$GrainMd>`
- `<$GrainLg>`





## Grain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Grain
include('material/Image/Grain')

' renders the element
Grain('Grain', 'Grain', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Grain
include('material/Image/Grain')

' renders the element
Grain('Grain', 'Grain', 'an optional tech label', 'an optional description')
@enduml
```

