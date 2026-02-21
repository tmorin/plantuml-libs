# HelicopterSymbol


```text
fontawesome/Solid/HelicopterSymbol
```

```text
include('fontawesome/Solid/HelicopterSymbol')
```



| Illustration | HelicopterSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HelicopterSymbol.png) | ![illustration for HelicopterSymbol](../../fontawesome/Solid/HelicopterSymbol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HelicopterSymbolXs>`
- `<$HelicopterSymbolSm>`
- `<$HelicopterSymbolMd>`
- `<$HelicopterSymbolLg>`





## HelicopterSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HelicopterSymbol
include('fontawesome/Solid/HelicopterSymbol')

' renders the element
HelicopterSymbol('HelicopterSymbol', 'Helicopter Symbol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HelicopterSymbol
include('fontawesome/Solid/HelicopterSymbol')

' renders the element
HelicopterSymbol('HelicopterSymbol', 'Helicopter Symbol', 'an optional tech label', 'an optional description')
@enduml
```

