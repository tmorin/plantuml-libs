# Coinmarketcap


```text
simpleicons-6/C/Coinmarketcap
```

```text
include('simpleicons-6/C/Coinmarketcap')
```



| Illustration | Coinmarketcap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Coinmarketcap.png) | ![illustration for Coinmarketcap](../../simpleicons-6/C/Coinmarketcap.Local.png) |




## Coinmarketcap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Coinmarketcap
include('simpleicons-6/C/Coinmarketcap')

' renders the element
Coinmarketcap('Coinmarketcap', 'Coinmarketcap', 'an optional tech label')
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

' loads the Item which embeds the element Coinmarketcap
include('simpleicons-6/C/Coinmarketcap')

' renders the element
Coinmarketcap('Coinmarketcap', 'Coinmarketcap', 'an optional tech label')
@enduml
```

