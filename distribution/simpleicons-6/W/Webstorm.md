# Webstorm


```text
simpleicons-6/W/Webstorm
```

```text
include('simpleicons-6/W/Webstorm')
```



| Illustration | Webstorm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Webstorm.png) | ![illustration for Webstorm](../../simpleicons-6/W/Webstorm.Local.png) |




## Webstorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Webstorm
include('simpleicons-6/W/Webstorm')

' renders the element
Webstorm('Webstorm', 'Webstorm', 'an optional tech label')
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

' loads the Item which embeds the element Webstorm
include('simpleicons-6/W/Webstorm')

' renders the element
Webstorm('Webstorm', 'Webstorm', 'an optional tech label')
@enduml
```

