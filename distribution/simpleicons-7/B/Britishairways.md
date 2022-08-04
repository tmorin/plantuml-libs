# Britishairways


```text
simpleicons-7/B/Britishairways
```

```text
include('simpleicons-7/B/Britishairways')
```



| Illustration | Britishairways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Britishairways.png) | ![illustration for Britishairways](../../simpleicons-7/B/Britishairways.Local.png) |




## Britishairways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Britishairways
include('simpleicons-7/B/Britishairways')

' renders the element
Britishairways('Britishairways', 'Britishairways', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Britishairways
include('simpleicons-7/B/Britishairways')

' renders the element
Britishairways('Britishairways', 'Britishairways', 'an optional tech label', 'an optional description')
@enduml
```

