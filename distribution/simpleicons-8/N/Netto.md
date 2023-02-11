# Netto


```text
simpleicons-8/N/Netto
```

```text
include('simpleicons-8/N/Netto')
```



| Illustration | Netto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Netto.png) | ![illustration for Netto](../../simpleicons-8/N/Netto.Local.png) |




## Netto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Netto
include('simpleicons-8/N/Netto')

' renders the element
Netto('Netto', 'Netto', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Netto
include('simpleicons-8/N/Netto')

' renders the element
Netto('Netto', 'Netto', 'an optional tech label', 'an optional description')
@enduml
```

