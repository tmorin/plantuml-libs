# Scrutinizerci


```text
simpleicons-5/S/Scrutinizerci
```

```text
include('simpleicons-5/S/Scrutinizerci')
```



| Illustration | Scrutinizerci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scrutinizerci.png) | ![illustration for Scrutinizerci](../../simpleicons-5/S/Scrutinizerci.Local.png) |




## Scrutinizerci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scrutinizerci
include('simpleicons-5/S/Scrutinizerci')

' renders the element
Scrutinizerci('Scrutinizerci', 'Scrutinizerci', 'an optional tech label')
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

' loads the Item which embeds the element Scrutinizerci
include('simpleicons-5/S/Scrutinizerci')

' renders the element
Scrutinizerci('Scrutinizerci', 'Scrutinizerci', 'an optional tech label')
@enduml
```

