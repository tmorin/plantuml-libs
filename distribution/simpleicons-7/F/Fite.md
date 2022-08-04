# Fite


```text
simpleicons-7/F/Fite
```

```text
include('simpleicons-7/F/Fite')
```



| Illustration | Fite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fite.png) | ![illustration for Fite](../../simpleicons-7/F/Fite.Local.png) |




## Fite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fite
include('simpleicons-7/F/Fite')

' renders the element
Fite('Fite', 'Fite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fite
include('simpleicons-7/F/Fite')

' renders the element
Fite('Fite', 'Fite', 'an optional tech label', 'an optional description')
@enduml
```

