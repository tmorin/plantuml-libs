# BitcoinSign


```text
fontawesome-6/Solid/BitcoinSign
```

```text
include('fontawesome-6/Solid/BitcoinSign')
```



| Illustration | BitcoinSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BitcoinSign.png) | ![illustration for BitcoinSign](../../fontawesome-6/Solid/BitcoinSign.Local.png) |




## BitcoinSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BitcoinSign
include('fontawesome-6/Solid/BitcoinSign')

' renders the element
BitcoinSign('BitcoinSign', 'Bitcoin Sign', 'an optional tech label')
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

' loads the Item which embeds the element BitcoinSign
include('fontawesome-6/Solid/BitcoinSign')

' renders the element
BitcoinSign('BitcoinSign', 'Bitcoin Sign', 'an optional tech label')
@enduml
```

