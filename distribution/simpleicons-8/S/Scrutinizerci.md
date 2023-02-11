# Scrutinizerci


```text
simpleicons-8/S/Scrutinizerci
```

```text
include('simpleicons-8/S/Scrutinizerci')
```



| Illustration | Scrutinizerci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Scrutinizerci.png) | ![illustration for Scrutinizerci](../../simpleicons-8/S/Scrutinizerci.Local.png) |




## Scrutinizerci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scrutinizerci
include('simpleicons-8/S/Scrutinizerci')

' renders the element
Scrutinizerci('Scrutinizerci', 'Scrutinizerci', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scrutinizerci
include('simpleicons-8/S/Scrutinizerci')

' renders the element
Scrutinizerci('Scrutinizerci', 'Scrutinizerci', 'an optional tech label', 'an optional description')
@enduml
```

