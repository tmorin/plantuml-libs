# Django


```text
simpleicons-5/D/Django
```

```text
include('simpleicons-5/D/Django')
```



| Illustration | Django |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Django.png) | ![illustration for Django](../../simpleicons-5/D/Django.Local.png) |




## Django

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Django
include('simpleicons-5/D/Django')

' renders the element
Django('Django', 'Django', 'an optional tech label')
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

' loads the Item which embeds the element Django
include('simpleicons-5/D/Django')

' renders the element
Django('Django', 'Django', 'an optional tech label')
@enduml
```

