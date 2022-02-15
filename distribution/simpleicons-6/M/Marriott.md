# Marriott


```text
simpleicons-6/M/Marriott
```

```text
include('simpleicons-6/M/Marriott')
```



| Illustration | Marriott |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Marriott.png) | ![illustration for Marriott](../../simpleicons-6/M/Marriott.Local.png) |




## Marriott

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Marriott
include('simpleicons-6/M/Marriott')

' renders the element
Marriott('Marriott', 'Marriott', 'an optional tech label')
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

' loads the Item which embeds the element Marriott
include('simpleicons-6/M/Marriott')

' renders the element
Marriott('Marriott', 'Marriott', 'an optional tech label')
@enduml
```

