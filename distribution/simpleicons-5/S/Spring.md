# Spring


```text
simpleicons-5/S/Spring
```

```text
include('simpleicons-5/S/Spring')
```



| Illustration | Spring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Spring.png) | ![illustration for Spring](../../simpleicons-5/S/Spring.Local.png) |




## Spring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spring
include('simpleicons-5/S/Spring')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spring
include('simpleicons-5/S/Spring')

' renders the element
Spring('Spring', 'Spring', 'an optional tech label')
@enduml
```

