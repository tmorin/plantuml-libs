# Bower


```text
simpleicons-5/B/Bower
```

```text
include('simpleicons-5/B/Bower')
```



| Illustration | Bower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bower.png) | ![illustration for Bower](../../simpleicons-5/B/Bower.Local.png) |




## Bower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bower
include('simpleicons-5/B/Bower')

' renders the element
Bower('Bower', 'Bower', 'an optional tech label')
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

' loads the Item which embeds the element Bower
include('simpleicons-5/B/Bower')

' renders the element
Bower('Bower', 'Bower', 'an optional tech label')
@enduml
```

