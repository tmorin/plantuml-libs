# Celery


```text
simpleicons-5/C/Celery
```

```text
include('simpleicons-5/C/Celery')
```



| Illustration | Celery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Celery.png) | ![illustration for Celery](../../simpleicons-5/C/Celery.Local.png) |




## Celery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Celery
include('simpleicons-5/C/Celery')

' renders the element
Celery('Celery', 'Celery', 'an optional tech label')
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

' loads the Item which embeds the element Celery
include('simpleicons-5/C/Celery')

' renders the element
Celery('Celery', 'Celery', 'an optional tech label')
@enduml
```

