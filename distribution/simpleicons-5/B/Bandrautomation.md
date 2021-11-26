# Bandrautomation


```text
simpleicons-5/B/Bandrautomation
```

```text
include('simpleicons-5/B/Bandrautomation')
```



| Illustration | Bandrautomation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bandrautomation.png) | ![illustration for Bandrautomation](../../simpleicons-5/B/Bandrautomation.Local.png) |




## Bandrautomation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bandrautomation
include('simpleicons-5/B/Bandrautomation')

' renders the element
Bandrautomation('Bandrautomation', 'Bandrautomation', 'an optional tech label')
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

' loads the Item which embeds the element Bandrautomation
include('simpleicons-5/B/Bandrautomation')

' renders the element
Bandrautomation('Bandrautomation', 'Bandrautomation', 'an optional tech label')
@enduml
```

