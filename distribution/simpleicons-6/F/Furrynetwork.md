# Furrynetwork


```text
simpleicons-6/F/Furrynetwork
```

```text
include('simpleicons-6/F/Furrynetwork')
```



| Illustration | Furrynetwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Furrynetwork.png) | ![illustration for Furrynetwork](../../simpleicons-6/F/Furrynetwork.Local.png) |




## Furrynetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Furrynetwork
include('simpleicons-6/F/Furrynetwork')

' renders the element
Furrynetwork('Furrynetwork', 'Furrynetwork', 'an optional tech label')
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

' loads the Item which embeds the element Furrynetwork
include('simpleicons-6/F/Furrynetwork')

' renders the element
Furrynetwork('Furrynetwork', 'Furrynetwork', 'an optional tech label')
@enduml
```

