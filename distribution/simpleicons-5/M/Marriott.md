# Marriott


```text
simpleicons-5/M/Marriott
```

```text
include('simpleicons-5/M/Marriott')
```



| Illustration | Marriott |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Marriott.png) | ![illustration for Marriott](../../simpleicons-5/M/Marriott.Local.png) |




## Marriott

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Marriott
include('simpleicons-5/M/Marriott')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Marriott
include('simpleicons-5/M/Marriott')

' renders the element
Marriott('Marriott', 'Marriott', 'an optional tech label')
@enduml
```

