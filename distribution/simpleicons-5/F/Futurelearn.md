# Futurelearn


```text
simpleicons-5/F/Futurelearn
```

```text
include('simpleicons-5/F/Futurelearn')
```



| Illustration | Futurelearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Futurelearn.png) | ![illustration for Futurelearn](../../simpleicons-5/F/Futurelearn.Local.png) |




## Futurelearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Futurelearn
include('simpleicons-5/F/Futurelearn')

' renders the element
Futurelearn('Futurelearn', 'Futurelearn', 'an optional tech label')
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

' loads the Item which embeds the element Futurelearn
include('simpleicons-5/F/Futurelearn')

' renders the element
Futurelearn('Futurelearn', 'Futurelearn', 'an optional tech label')
@enduml
```

