# Jquery


```text
simpleicons-5/J/Jquery
```

```text
include('simpleicons-5/J/Jquery')
```



| Illustration | Jquery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jquery.png) | ![illustration for Jquery](../../simpleicons-5/J/Jquery.Local.png) |




## Jquery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jquery
include('simpleicons-5/J/Jquery')

' renders the element
Jquery('Jquery', 'Jquery', 'an optional tech label')
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

' loads the Item which embeds the element Jquery
include('simpleicons-5/J/Jquery')

' renders the element
Jquery('Jquery', 'Jquery', 'an optional tech label')
@enduml
```

