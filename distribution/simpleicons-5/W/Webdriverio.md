# Webdriverio


```text
simpleicons-5/W/Webdriverio
```

```text
include('simpleicons-5/W/Webdriverio')
```



| Illustration | Webdriverio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Webdriverio.png) | ![illustration for Webdriverio](../../simpleicons-5/W/Webdriverio.Local.png) |




## Webdriverio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Webdriverio
include('simpleicons-5/W/Webdriverio')

' renders the element
Webdriverio('Webdriverio', 'Webdriverio', 'an optional tech label')
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

' loads the Item which embeds the element Webdriverio
include('simpleicons-5/W/Webdriverio')

' renders the element
Webdriverio('Webdriverio', 'Webdriverio', 'an optional tech label')
@enduml
```

