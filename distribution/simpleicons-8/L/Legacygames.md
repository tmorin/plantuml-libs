# Legacygames


```text
simpleicons-8/L/Legacygames
```

```text
include('simpleicons-8/L/Legacygames')
```



| Illustration | Legacygames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Legacygames.png) | ![illustration for Legacygames](../../simpleicons-8/L/Legacygames.Local.png) |




## Legacygames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Legacygames
include('simpleicons-8/L/Legacygames')

' renders the element
Legacygames('Legacygames', 'Legacygames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Legacygames
include('simpleicons-8/L/Legacygames')

' renders the element
Legacygames('Legacygames', 'Legacygames', 'an optional tech label', 'an optional description')
@enduml
```

