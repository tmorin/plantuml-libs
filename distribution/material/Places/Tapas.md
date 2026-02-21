# Tapas


```text
material/Places/Tapas
```

```text
include('material/Places/Tapas')
```



| Illustration | Tapas |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Tapas.png) | ![illustration for Tapas](../../material/Places/Tapas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TapasXs>`
- `<$TapasSm>`
- `<$TapasMd>`
- `<$TapasLg>`





## Tapas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Tapas
include('material/Places/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tapas
include('material/Places/Tapas')

' renders the element
Tapas('Tapas', 'Tapas', 'an optional tech label', 'an optional description')
@enduml
```

