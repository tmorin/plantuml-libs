# Googlecalendar


```text
simpleicons-7/G/Googlecalendar
```

```text
include('simpleicons-7/G/Googlecalendar')
```



| Illustration | Googlecalendar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlecalendar.png) | ![illustration for Googlecalendar](../../simpleicons-7/G/Googlecalendar.Local.png) |




## Googlecalendar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlecalendar
include('simpleicons-7/G/Googlecalendar')

' renders the element
Googlecalendar('Googlecalendar', 'Googlecalendar', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlecalendar
include('simpleicons-7/G/Googlecalendar')

' renders the element
Googlecalendar('Googlecalendar', 'Googlecalendar', 'an optional tech label', 'an optional description')
@enduml
```

