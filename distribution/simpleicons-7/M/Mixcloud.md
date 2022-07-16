# Mixcloud


```text
simpleicons-7/M/Mixcloud
```

```text
include('simpleicons-7/M/Mixcloud')
```



| Illustration | Mixcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mixcloud.png) | ![illustration for Mixcloud](../../simpleicons-7/M/Mixcloud.Local.png) |




## Mixcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mixcloud
include('simpleicons-7/M/Mixcloud')

' renders the element
Mixcloud('Mixcloud', 'Mixcloud', 'an optional tech label')
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

' loads the Item which embeds the element Mixcloud
include('simpleicons-7/M/Mixcloud')

' renders the element
Mixcloud('Mixcloud', 'Mixcloud', 'an optional tech label')
@enduml
```

