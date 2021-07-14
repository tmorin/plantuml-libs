# Tmobile


```text
simpleicons-5/T/Tmobile
```

```text
include('simpleicons-5/T/Tmobile')
```



| Illustration | Tmobile |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tmobile.png) | ![illustration for Tmobile](../../simpleicons-5/T/Tmobile.Local.png) |




## Tmobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tmobile
include('simpleicons-5/T/Tmobile')

' renders the element
Tmobile('Tmobile', 'Tmobile', 'an optional tech label')
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

' loads the Item which embeds the element Tmobile
include('simpleicons-5/T/Tmobile')

' renders the element
Tmobile('Tmobile', 'Tmobile', 'an optional tech label')
@enduml
```

