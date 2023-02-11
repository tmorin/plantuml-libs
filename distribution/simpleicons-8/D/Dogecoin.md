# Dogecoin


```text
simpleicons-8/D/Dogecoin
```

```text
include('simpleicons-8/D/Dogecoin')
```



| Illustration | Dogecoin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dogecoin.png) | ![illustration for Dogecoin](../../simpleicons-8/D/Dogecoin.Local.png) |




## Dogecoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dogecoin
include('simpleicons-8/D/Dogecoin')

' renders the element
Dogecoin('Dogecoin', 'Dogecoin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dogecoin
include('simpleicons-8/D/Dogecoin')

' renders the element
Dogecoin('Dogecoin', 'Dogecoin', 'an optional tech label', 'an optional description')
@enduml
```

