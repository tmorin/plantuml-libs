# Junit5


```text
simpleicons-5/J/Junit5
```

```text
include('simpleicons-5/J/Junit5')
```



| Illustration | Junit5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Junit5.png) | ![illustration for Junit5](../../simpleicons-5/J/Junit5.Local.png) |




## Junit5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Junit5
include('simpleicons-5/J/Junit5')

' renders the element
Junit5('Junit5', 'Junit5', 'an optional tech label')
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

' loads the Item which embeds the element Junit5
include('simpleicons-5/J/Junit5')

' renders the element
Junit5('Junit5', 'Junit5', 'an optional tech label')
@enduml
```

