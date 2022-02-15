# Weblate


```text
simpleicons-6/W/Weblate
```

```text
include('simpleicons-6/W/Weblate')
```



| Illustration | Weblate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Weblate.png) | ![illustration for Weblate](../../simpleicons-6/W/Weblate.Local.png) |




## Weblate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Weblate
include('simpleicons-6/W/Weblate')

' renders the element
Weblate('Weblate', 'Weblate', 'an optional tech label')
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

' loads the Item which embeds the element Weblate
include('simpleicons-6/W/Weblate')

' renders the element
Weblate('Weblate', 'Weblate', 'an optional tech label')
@enduml
```

