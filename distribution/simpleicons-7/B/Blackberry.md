# Blackberry


```text
simpleicons-7/B/Blackberry
```

```text
include('simpleicons-7/B/Blackberry')
```



| Illustration | Blackberry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Blackberry.png) | ![illustration for Blackberry](../../simpleicons-7/B/Blackberry.Local.png) |




## Blackberry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Blackberry
include('simpleicons-7/B/Blackberry')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Blackberry
include('simpleicons-7/B/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label')
@enduml
```

