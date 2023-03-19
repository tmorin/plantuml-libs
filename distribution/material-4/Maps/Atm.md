# Atm


```text
material-4/Maps/Atm
```

```text
include('material-4/Maps/Atm')
```



| Illustration | Atm |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Atm.png) | ![illustration for Atm](../../material-4/Maps/Atm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtmXs>`
- `<$AtmSm>`
- `<$AtmMd>`
- `<$AtmLg>`





## Atm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Atm
include('material-4/Maps/Atm')

' renders the element
Atm('Atm', 'Atm', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Atm
include('material-4/Maps/Atm')

' renders the element
Atm('Atm', 'Atm', 'an optional tech label', 'an optional description')
@enduml
```

