# Webflow


```text
simpleicons-6/W/Webflow
```

```text
include('simpleicons-6/W/Webflow')
```



| Illustration | Webflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Webflow.png) | ![illustration for Webflow](../../simpleicons-6/W/Webflow.Local.png) |




## Webflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Webflow
include('simpleicons-6/W/Webflow')

' renders the element
Webflow('Webflow', 'Webflow', 'an optional tech label')
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

' loads the Item which embeds the element Webflow
include('simpleicons-6/W/Webflow')

' renders the element
Webflow('Webflow', 'Webflow', 'an optional tech label')
@enduml
```

