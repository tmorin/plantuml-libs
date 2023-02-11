# Bower


```text
simpleicons-8/B/Bower
```

```text
include('simpleicons-8/B/Bower')
```



| Illustration | Bower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bower.png) | ![illustration for Bower](../../simpleicons-8/B/Bower.Local.png) |




## Bower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bower
include('simpleicons-8/B/Bower')

' renders the element
Bower('Bower', 'Bower', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bower
include('simpleicons-8/B/Bower')

' renders the element
Bower('Bower', 'Bower', 'an optional tech label', 'an optional description')
@enduml
```

