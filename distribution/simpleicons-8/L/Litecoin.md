# Litecoin


```text
simpleicons-8/L/Litecoin
```

```text
include('simpleicons-8/L/Litecoin')
```



| Illustration | Litecoin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Litecoin.png) | ![illustration for Litecoin](../../simpleicons-8/L/Litecoin.Local.png) |




## Litecoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Litecoin
include('simpleicons-8/L/Litecoin')

' renders the element
Litecoin('Litecoin', 'Litecoin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Litecoin
include('simpleicons-8/L/Litecoin')

' renders the element
Litecoin('Litecoin', 'Litecoin', 'an optional tech label', 'an optional description')
@enduml
```

