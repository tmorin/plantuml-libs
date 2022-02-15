# Dwavesystems


```text
simpleicons-6/D/Dwavesystems
```

```text
include('simpleicons-6/D/Dwavesystems')
```



| Illustration | Dwavesystems |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dwavesystems.png) | ![illustration for Dwavesystems](../../simpleicons-6/D/Dwavesystems.Local.png) |




## Dwavesystems

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dwavesystems
include('simpleicons-6/D/Dwavesystems')

' renders the element
Dwavesystems('Dwavesystems', 'Dwavesystems', 'an optional tech label')
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

' loads the Item which embeds the element Dwavesystems
include('simpleicons-6/D/Dwavesystems')

' renders the element
Dwavesystems('Dwavesystems', 'Dwavesystems', 'an optional tech label')
@enduml
```

