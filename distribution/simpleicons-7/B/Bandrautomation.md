# Bandrautomation


```text
simpleicons-7/B/Bandrautomation
```

```text
include('simpleicons-7/B/Bandrautomation')
```



| Illustration | Bandrautomation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bandrautomation.png) | ![illustration for Bandrautomation](../../simpleicons-7/B/Bandrautomation.Local.png) |




## Bandrautomation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bandrautomation
include('simpleicons-7/B/Bandrautomation')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bandrautomation
include('simpleicons-7/B/Bandrautomation')

' renders the element
Bandrautomation('Bandrautomation', 'Bandrautomation', 'an optional tech label')
@enduml
```

