# Rome


```text
simpleicons-7/R/Rome
```

```text
include('simpleicons-7/R/Rome')
```



| Illustration | Rome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rome.png) | ![illustration for Rome](../../simpleicons-7/R/Rome.Local.png) |




## Rome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rome
include('simpleicons-7/R/Rome')

' renders the element
Rome('Rome', 'Rome', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rome
include('simpleicons-7/R/Rome')

' renders the element
Rome('Rome', 'Rome', 'an optional tech label')
@enduml
```

