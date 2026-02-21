# Spa


```text
material/Places/Spa
```

```text
include('material/Places/Spa')
```



| Illustration | Spa |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Spa.png) | ![illustration for Spa](../../material/Places/Spa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpaXs>`
- `<$SpaSm>`
- `<$SpaMd>`
- `<$SpaLg>`





## Spa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Spa
include('material/Places/Spa')

' renders the element
Spa('Spa', 'Spa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spa
include('material/Places/Spa')

' renders the element
Spa('Spa', 'Spa', 'an optional tech label', 'an optional description')
@enduml
```

