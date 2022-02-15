# Nintendonetwork


```text
simpleicons-6/N/Nintendonetwork
```

```text
include('simpleicons-6/N/Nintendonetwork')
```



| Illustration | Nintendonetwork |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nintendonetwork.png) | ![illustration for Nintendonetwork](../../simpleicons-6/N/Nintendonetwork.Local.png) |




## Nintendonetwork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nintendonetwork
include('simpleicons-6/N/Nintendonetwork')

' renders the element
Nintendonetwork('Nintendonetwork', 'Nintendonetwork', 'an optional tech label')
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

' loads the Item which embeds the element Nintendonetwork
include('simpleicons-6/N/Nintendonetwork')

' renders the element
Nintendonetwork('Nintendonetwork', 'Nintendonetwork', 'an optional tech label')
@enduml
```

