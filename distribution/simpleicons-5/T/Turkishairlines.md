# Turkishairlines


```text
simpleicons-5/T/Turkishairlines
```

```text
include('simpleicons-5/T/Turkishairlines')
```



| Illustration | Turkishairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Turkishairlines.png) | ![illustration for Turkishairlines](../../simpleicons-5/T/Turkishairlines.Local.png) |




## Turkishairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Turkishairlines
include('simpleicons-5/T/Turkishairlines')

' renders the element
Turkishairlines('Turkishairlines', 'Turkishairlines', 'an optional tech label')
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

' loads the Item which embeds the element Turkishairlines
include('simpleicons-5/T/Turkishairlines')

' renders the element
Turkishairlines('Turkishairlines', 'Turkishairlines', 'an optional tech label')
@enduml
```

