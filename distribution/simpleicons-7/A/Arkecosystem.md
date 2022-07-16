# Arkecosystem


```text
simpleicons-7/A/Arkecosystem
```

```text
include('simpleicons-7/A/Arkecosystem')
```



| Illustration | Arkecosystem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Arkecosystem.png) | ![illustration for Arkecosystem](../../simpleicons-7/A/Arkecosystem.Local.png) |




## Arkecosystem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Arkecosystem
include('simpleicons-7/A/Arkecosystem')

' renders the element
Arkecosystem('Arkecosystem', 'Arkecosystem', 'an optional tech label')
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

' loads the Item which embeds the element Arkecosystem
include('simpleicons-7/A/Arkecosystem')

' renders the element
Arkecosystem('Arkecosystem', 'Arkecosystem', 'an optional tech label')
@enduml
```

