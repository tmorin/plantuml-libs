# Coinbase


```text
simpleicons-5/C/Coinbase
```

```text
include('simpleicons-5/C/Coinbase')
```



| Illustration | Coinbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Coinbase.png) | ![illustration for Coinbase](../../simpleicons-5/C/Coinbase.Local.png) |




## Coinbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Coinbase
include('simpleicons-5/C/Coinbase')

' renders the element
Coinbase('Coinbase', 'Coinbase', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Coinbase
include('simpleicons-5/C/Coinbase')

' renders the element
Coinbase('Coinbase', 'Coinbase', 'an optional tech label')
@enduml
```

