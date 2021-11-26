# Ifood


```text
simpleicons-5/I/Ifood
```

```text
include('simpleicons-5/I/Ifood')
```



| Illustration | Ifood |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Ifood.png) | ![illustration for Ifood](../../simpleicons-5/I/Ifood.Local.png) |




## Ifood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ifood
include('simpleicons-5/I/Ifood')

' renders the element
Ifood('Ifood', 'Ifood', 'an optional tech label')
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

' loads the Item which embeds the element Ifood
include('simpleicons-5/I/Ifood')

' renders the element
Ifood('Ifood', 'Ifood', 'an optional tech label')
@enduml
```

