# Statuspage


```text
simpleicons-5/S/Statuspage
```

```text
include('simpleicons-5/S/Statuspage')
```



| Illustration | Statuspage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Statuspage.png) | ![illustration for Statuspage](../../simpleicons-5/S/Statuspage.Local.png) |




## Statuspage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Statuspage
include('simpleicons-5/S/Statuspage')

' renders the element
Statuspage('Statuspage', 'Statuspage', 'an optional tech label')
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

' loads the Item which embeds the element Statuspage
include('simpleicons-5/S/Statuspage')

' renders the element
Statuspage('Statuspage', 'Statuspage', 'an optional tech label')
@enduml
```

