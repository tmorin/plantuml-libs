# Ubereats


```text
simpleicons-6/U/Ubereats
```

```text
include('simpleicons-6/U/Ubereats')
```



| Illustration | Ubereats |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Ubereats.png) | ![illustration for Ubereats](../../simpleicons-6/U/Ubereats.Local.png) |




## Ubereats

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ubereats
include('simpleicons-6/U/Ubereats')

' renders the element
Ubereats('Ubereats', 'Ubereats', 'an optional tech label')
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

' loads the Item which embeds the element Ubereats
include('simpleicons-6/U/Ubereats')

' renders the element
Ubereats('Ubereats', 'Ubereats', 'an optional tech label')
@enduml
```

