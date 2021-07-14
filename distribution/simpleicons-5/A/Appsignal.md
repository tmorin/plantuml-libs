# Appsignal


```text
simpleicons-5/A/Appsignal
```

```text
include('simpleicons-5/A/Appsignal')
```



| Illustration | Appsignal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Appsignal.png) | ![illustration for Appsignal](../../simpleicons-5/A/Appsignal.Local.png) |




## Appsignal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Appsignal
include('simpleicons-5/A/Appsignal')

' renders the element
Appsignal('Appsignal', 'Appsignal', 'an optional tech label')
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

' loads the Item which embeds the element Appsignal
include('simpleicons-5/A/Appsignal')

' renders the element
Appsignal('Appsignal', 'Appsignal', 'an optional tech label')
@enduml
```

