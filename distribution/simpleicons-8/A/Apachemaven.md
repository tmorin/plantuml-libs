# Apachemaven


```text
simpleicons-8/A/Apachemaven
```

```text
include('simpleicons-8/A/Apachemaven')
```



| Illustration | Apachemaven |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Apachemaven.png) | ![illustration for Apachemaven](../../simpleicons-8/A/Apachemaven.Local.png) |




## Apachemaven

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachemaven
include('simpleicons-8/A/Apachemaven')

' renders the element
Apachemaven('Apachemaven', 'Apachemaven', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachemaven
include('simpleicons-8/A/Apachemaven')

' renders the element
Apachemaven('Apachemaven', 'Apachemaven', 'an optional tech label', 'an optional description')
@enduml
```
