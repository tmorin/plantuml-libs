# Firefoxbrowser


```text
simpleicons-6/F/Firefoxbrowser
```

```text
include('simpleicons-6/F/Firefoxbrowser')
```



| Illustration | Firefoxbrowser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Firefoxbrowser.png) | ![illustration for Firefoxbrowser](../../simpleicons-6/F/Firefoxbrowser.Local.png) |




## Firefoxbrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Firefoxbrowser
include('simpleicons-6/F/Firefoxbrowser')

' renders the element
Firefoxbrowser('Firefoxbrowser', 'Firefoxbrowser', 'an optional tech label')
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

' loads the Item which embeds the element Firefoxbrowser
include('simpleicons-6/F/Firefoxbrowser')

' renders the element
Firefoxbrowser('Firefoxbrowser', 'Firefoxbrowser', 'an optional tech label')
@enduml
```

