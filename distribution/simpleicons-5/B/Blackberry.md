# Blackberry


```text
simpleicons-5/B/Blackberry
```

```text
include('simpleicons-5/B/Blackberry')
```



| Illustration | Blackberry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Blackberry.png) | ![illustration for Blackberry](../../simpleicons-5/B/Blackberry.Local.png) |




## Blackberry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Blackberry
include('simpleicons-5/B/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label')
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

' loads the Item which embeds the element Blackberry
include('simpleicons-5/B/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label')
@enduml
```

