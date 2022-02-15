# Spring


```text
simpleicons-6/S/Spring
```

```text
include('simpleicons-6/S/Spring')
```



| Illustration | Spring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Spring.png) | ![illustration for Spring](../../simpleicons-6/S/Spring.Local.png) |




## Spring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Spring
include('simpleicons-6/S/Spring')

' renders the element
Spring('Spring', 'Spring', 'an optional tech label')
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

' loads the Item which embeds the element Spring
include('simpleicons-6/S/Spring')

' renders the element
Spring('Spring', 'Spring', 'an optional tech label')
@enduml
```

