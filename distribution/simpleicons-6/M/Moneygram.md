# Moneygram


```text
simpleicons-6/M/Moneygram
```

```text
include('simpleicons-6/M/Moneygram')
```



| Illustration | Moneygram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Moneygram.png) | ![illustration for Moneygram](../../simpleicons-6/M/Moneygram.Local.png) |




## Moneygram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Moneygram
include('simpleicons-6/M/Moneygram')

' renders the element
Moneygram('Moneygram', 'Moneygram', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Moneygram
include('simpleicons-6/M/Moneygram')

' renders the element
Moneygram('Moneygram', 'Moneygram', 'an optional tech label')
@enduml
```

