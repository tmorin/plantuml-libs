# Windicss


```text
simpleicons-6/W/Windicss
```

```text
include('simpleicons-6/W/Windicss')
```



| Illustration | Windicss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Windicss.png) | ![illustration for Windicss](../../simpleicons-6/W/Windicss.Local.png) |




## Windicss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Windicss
include('simpleicons-6/W/Windicss')

' renders the element
Windicss('Windicss', 'Windicss', 'an optional tech label')
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

' loads the Item which embeds the element Windicss
include('simpleicons-6/W/Windicss')

' renders the element
Windicss('Windicss', 'Windicss', 'an optional tech label')
@enduml
```

