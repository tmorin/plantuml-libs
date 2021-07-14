# Apacheflink


```text
simpleicons-5/A/Apacheflink
```

```text
include('simpleicons-5/A/Apacheflink')
```



| Illustration | Apacheflink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apacheflink.png) | ![illustration for Apacheflink](../../simpleicons-5/A/Apacheflink.Local.png) |




## Apacheflink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apacheflink
include('simpleicons-5/A/Apacheflink')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apacheflink
include('simpleicons-5/A/Apacheflink')

' renders the element
Apacheflink('Apacheflink', 'Apacheflink', 'an optional tech label')
@enduml
```

