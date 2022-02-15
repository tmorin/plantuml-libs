# Uber


```text
simpleicons-6/U/Uber
```

```text
include('simpleicons-6/U/Uber')
```



| Illustration | Uber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Uber.png) | ![illustration for Uber](../../simpleicons-6/U/Uber.Local.png) |




## Uber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Uber
include('simpleicons-6/U/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label')
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

' loads the Item which embeds the element Uber
include('simpleicons-6/U/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label')
@enduml
```

