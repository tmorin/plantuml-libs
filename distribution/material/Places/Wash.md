# Wash


```text
material/Places/Wash
```

```text
include('material/Places/Wash')
```



| Illustration | Wash |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Wash.png) | ![illustration for Wash](../../material/Places/Wash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WashXs>`
- `<$WashSm>`
- `<$WashMd>`
- `<$WashLg>`





## Wash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Wash
include('material/Places/Wash')

' renders the element
Wash('Wash', 'Wash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wash
include('material/Places/Wash')

' renders the element
Wash('Wash', 'Wash', 'an optional tech label', 'an optional description')
@enduml
```

