# Wagtail


```text
simpleicons-5/W/Wagtail
```

```text
include('simpleicons-5/W/Wagtail')
```



| Illustration | Wagtail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wagtail.png) | ![illustration for Wagtail](../../simpleicons-5/W/Wagtail.Local.png) |




## Wagtail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wagtail
include('simpleicons-5/W/Wagtail')

' renders the element
Wagtail('Wagtail', 'Wagtail', 'an optional tech label')
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

' loads the Item which embeds the element Wagtail
include('simpleicons-5/W/Wagtail')

' renders the element
Wagtail('Wagtail', 'Wagtail', 'an optional tech label')
@enduml
```

