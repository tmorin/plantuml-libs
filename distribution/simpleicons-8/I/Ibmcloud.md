# Ibmcloud


```text
simpleicons-8/I/Ibmcloud
```

```text
include('simpleicons-8/I/Ibmcloud')
```



| Illustration | Ibmcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Ibmcloud.png) | ![illustration for Ibmcloud](../../simpleicons-8/I/Ibmcloud.Local.png) |




## Ibmcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ibmcloud
include('simpleicons-8/I/Ibmcloud')

' renders the element
Ibmcloud('Ibmcloud', 'Ibmcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ibmcloud
include('simpleicons-8/I/Ibmcloud')

' renders the element
Ibmcloud('Ibmcloud', 'Ibmcloud', 'an optional tech label', 'an optional description')
@enduml
```

