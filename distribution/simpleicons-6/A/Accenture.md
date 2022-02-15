# Accenture


```text
simpleicons-6/A/Accenture
```

```text
include('simpleicons-6/A/Accenture')
```



| Illustration | Accenture |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Accenture.png) | ![illustration for Accenture](../../simpleicons-6/A/Accenture.Local.png) |




## Accenture

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Accenture
include('simpleicons-6/A/Accenture')

' renders the element
Accenture('Accenture', 'Accenture', 'an optional tech label')
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

' loads the Item which embeds the element Accenture
include('simpleicons-6/A/Accenture')

' renders the element
Accenture('Accenture', 'Accenture', 'an optional tech label')
@enduml
```

