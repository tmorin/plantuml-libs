# NfcSymbol


```text
fontawesome-6/Brands/NfcSymbol
```

```text
include('fontawesome-6/Brands/NfcSymbol')
```



| Illustration | NfcSymbol |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/NfcSymbol.png) | ![illustration for NfcSymbol](../../fontawesome-6/Brands/NfcSymbol.Local.png) |




## NfcSymbol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NfcSymbol
include('fontawesome-6/Brands/NfcSymbol')

' renders the element
NfcSymbol('NfcSymbol', 'Nfc Symbol', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NfcSymbol
include('fontawesome-6/Brands/NfcSymbol')

' renders the element
NfcSymbol('NfcSymbol', 'Nfc Symbol', 'an optional tech label')
@enduml
```

