# Stubhub


```text
simpleicons-5/S/Stubhub
```

```text
include('simpleicons-5/S/Stubhub')
```



| Illustration | Stubhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Stubhub.png) | ![illustration for Stubhub](../../simpleicons-5/S/Stubhub.Local.png) |




## Stubhub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stubhub
include('simpleicons-5/S/Stubhub')

' renders the element
Stubhub('Stubhub', 'Stubhub', 'an optional tech label')
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

' loads the Item which embeds the element Stubhub
include('simpleicons-5/S/Stubhub')

' renders the element
Stubhub('Stubhub', 'Stubhub', 'an optional tech label')
@enduml
```

