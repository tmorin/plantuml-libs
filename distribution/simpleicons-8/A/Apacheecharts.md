# Apacheecharts


```text
simpleicons-8/A/Apacheecharts
```

```text
include('simpleicons-8/A/Apacheecharts')
```



| Illustration | Apacheecharts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Apacheecharts.png) | ![illustration for Apacheecharts](../../simpleicons-8/A/Apacheecharts.Local.png) |




## Apacheecharts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apacheecharts
include('simpleicons-8/A/Apacheecharts')

' renders the element
Apacheecharts('Apacheecharts', 'Apacheecharts', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apacheecharts
include('simpleicons-8/A/Apacheecharts')

' renders the element
Apacheecharts('Apacheecharts', 'Apacheecharts', 'an optional tech label', 'an optional description')
@enduml
```

