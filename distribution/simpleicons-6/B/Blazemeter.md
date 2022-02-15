# Blazemeter


```text
simpleicons-6/B/Blazemeter
```

```text
include('simpleicons-6/B/Blazemeter')
```



| Illustration | Blazemeter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Blazemeter.png) | ![illustration for Blazemeter](../../simpleicons-6/B/Blazemeter.Local.png) |




## Blazemeter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Blazemeter
include('simpleicons-6/B/Blazemeter')

' renders the element
Blazemeter('Blazemeter', 'Blazemeter', 'an optional tech label')
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

' loads the Item which embeds the element Blazemeter
include('simpleicons-6/B/Blazemeter')

' renders the element
Blazemeter('Blazemeter', 'Blazemeter', 'an optional tech label')
@enduml
```

