# Duo


```text
material/Communication/Duo
```

```text
include('material/Communication/Duo')
```



| Illustration | Duo |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Duo.png) | ![illustration for Duo](../../material/Communication/Duo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DuoXs>`
- `<$DuoSm>`
- `<$DuoMd>`
- `<$DuoLg>`





## Duo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Duo
include('material/Communication/Duo')

' renders the element
Duo('Duo', 'Duo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duo
include('material/Communication/Duo')

' renders the element
Duo('Duo', 'Duo', 'an optional tech label', 'an optional description')
@enduml
```

