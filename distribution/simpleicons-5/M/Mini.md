# Mini


```text
simpleicons-5/M/Mini
```

```text
include('simpleicons-5/M/Mini')
```



| Illustration | Mini |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mini.png) | ![illustration for Mini](../../simpleicons-5/M/Mini.Local.png) |




## Mini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mini
include('simpleicons-5/M/Mini')

' renders the element
Mini('Mini', 'Mini', 'an optional tech label')
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

' loads the Item which embeds the element Mini
include('simpleicons-5/M/Mini')

' renders the element
Mini('Mini', 'Mini', 'an optional tech label')
@enduml
```

