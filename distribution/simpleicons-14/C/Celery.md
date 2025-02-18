# Celery


```text
simpleicons-14/C/Celery
```

```text
include('simpleicons-14/C/Celery')
```



| Illustration | Celery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Celery.png) | ![illustration for Celery](../../simpleicons-14/C/Celery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CeleryXs>`
- `<$CelerySm>`
- `<$CeleryMd>`
- `<$CeleryLg>`





## Celery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Celery
include('simpleicons-14/C/Celery')

' renders the element
Celery('Celery', 'Celery', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Celery
include('simpleicons-14/C/Celery')

' renders the element
Celery('Celery', 'Celery', 'an optional tech label', 'an optional description')
@enduml
```

