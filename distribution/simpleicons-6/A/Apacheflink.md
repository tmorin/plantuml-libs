# Apacheflink


```text
simpleicons-6/A/Apacheflink
```

```text
include('simpleicons-6/A/Apacheflink')
```



| Illustration | Apacheflink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apacheflink.png) | ![illustration for Apacheflink](../../simpleicons-6/A/Apacheflink.Local.png) |




## Apacheflink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apacheflink
include('simpleicons-6/A/Apacheflink')

' renders the element
Apacheflink('Apacheflink', 'Apacheflink', 'an optional tech label')
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

' loads the Item which embeds the element Apacheflink
include('simpleicons-6/A/Apacheflink')

' renders the element
Apacheflink('Apacheflink', 'Apacheflink', 'an optional tech label')
@enduml
```

