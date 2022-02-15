# Futurelearn


```text
simpleicons-6/F/Futurelearn
```

```text
include('simpleicons-6/F/Futurelearn')
```



| Illustration | Futurelearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Futurelearn.png) | ![illustration for Futurelearn](../../simpleicons-6/F/Futurelearn.Local.png) |




## Futurelearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Futurelearn
include('simpleicons-6/F/Futurelearn')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Futurelearn
include('simpleicons-6/F/Futurelearn')

' renders the element
Futurelearn('Futurelearn', 'Futurelearn', 'an optional tech label')
@enduml
```

