# Screencastify


```text
simpleicons-5/S/Screencastify
```

```text
include('simpleicons-5/S/Screencastify')
```



| Illustration | Screencastify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Screencastify.png) | ![illustration for Screencastify](../../simpleicons-5/S/Screencastify.Local.png) |




## Screencastify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Screencastify
include('simpleicons-5/S/Screencastify')

' renders the element
Screencastify('Screencastify', 'Screencastify', 'an optional tech label')
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

' loads the Item which embeds the element Screencastify
include('simpleicons-5/S/Screencastify')

' renders the element
Screencastify('Screencastify', 'Screencastify', 'an optional tech label')
@enduml
```

