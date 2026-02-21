# Minimize


```text
material/Action/Minimize
```

```text
include('material/Action/Minimize')
```



| Illustration | Minimize |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Minimize.png) | ![illustration for Minimize](../../material/Action/Minimize.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Minimize
include('material/Action/Minimize')

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
include('material/bootstrap')

' loads the Item which embeds the element Minimize
include('material/Action/Minimize')

' renders the element
Minimize('Minimize', 'Minimize', 'an optional tech label', 'an optional description')
@enduml
```

