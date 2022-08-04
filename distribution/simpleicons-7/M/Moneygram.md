# Moneygram


```text
simpleicons-7/M/Moneygram
```

```text
include('simpleicons-7/M/Moneygram')
```



| Illustration | Moneygram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Moneygram.png) | ![illustration for Moneygram](../../simpleicons-7/M/Moneygram.Local.png) |




## Moneygram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Moneygram
include('simpleicons-7/M/Moneygram')

' renders the element
Moneygram('Moneygram', 'Moneygram', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Moneygram
include('simpleicons-7/M/Moneygram')

' renders the element
Moneygram('Moneygram', 'Moneygram', 'an optional tech label', 'an optional description')
@enduml
```

