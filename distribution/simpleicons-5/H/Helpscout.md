# Helpscout


```text
simpleicons-5/H/Helpscout
```

```text
include('simpleicons-5/H/Helpscout')
```



| Illustration | Helpscout |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Helpscout.png) | ![illustration for Helpscout](../../simpleicons-5/H/Helpscout.Local.png) |




## Helpscout

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Helpscout
include('simpleicons-5/H/Helpscout')

' renders the element
Helpscout('Helpscout', 'Helpscout', 'an optional tech label')
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

' loads the Item which embeds the element Helpscout
include('simpleicons-5/H/Helpscout')

' renders the element
Helpscout('Helpscout', 'Helpscout', 'an optional tech label')
@enduml
```

