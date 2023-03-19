# AcUnit


```text
material-4/Places/AcUnit
```

```text
include('material-4/Places/AcUnit')
```



| Illustration | AcUnit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/AcUnit.png) | ![illustration for AcUnit](../../material-4/Places/AcUnit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AcUnitXs>`
- `<$AcUnitSm>`
- `<$AcUnitMd>`
- `<$AcUnitLg>`





## AcUnit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AcUnit
include('material-4/Places/AcUnit')

' renders the element
AcUnit('AcUnit', 'Ac Unit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AcUnit
include('material-4/Places/AcUnit')

' renders the element
AcUnit('AcUnit', 'Ac Unit', 'an optional tech label', 'an optional description')
@enduml
```

