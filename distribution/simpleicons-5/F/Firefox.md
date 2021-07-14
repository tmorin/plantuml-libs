# Firefox


```text
simpleicons-5/F/Firefox
```

```text
include('simpleicons-5/F/Firefox')
```



| Illustration | Firefox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Firefox.png) | ![illustration for Firefox](../../simpleicons-5/F/Firefox.Local.png) |




## Firefox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Firefox
include('simpleicons-5/F/Firefox')

' renders the element
Firefox('Firefox', 'Firefox', 'an optional tech label')
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

' loads the Item which embeds the element Firefox
include('simpleicons-5/F/Firefox')

' renders the element
Firefox('Firefox', 'Firefox', 'an optional tech label')
@enduml
```

