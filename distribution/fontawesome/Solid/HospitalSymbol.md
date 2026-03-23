# HospitalSymbol


```text
fontawesome/Solid/HospitalSymbol
```

```text
include('fontawesome/Solid/HospitalSymbol')
```



| Illustration | HospitalSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HospitalSymbol.png) | ![illustration for HospitalSymbol](../../fontawesome/Solid/HospitalSymbol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HospitalSymbolXs>`
- `<$HospitalSymbolSm>`
- `<$HospitalSymbolMd>`
- `<$HospitalSymbolLg>`





## HospitalSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HospitalSymbol
include('fontawesome/Solid/HospitalSymbol')

' renders the element
HospitalSymbol('HospitalSymbol', 'Hospital Symbol', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HospitalSymbol
include('fontawesome/Solid/HospitalSymbol')

' renders the element
HospitalSymbol('HospitalSymbol', 'Hospital Symbol', 'an optional tech label', 'an optional description')
@enduml
```

