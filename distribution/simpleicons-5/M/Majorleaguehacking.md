# Majorleaguehacking


```text
simpleicons-5/M/Majorleaguehacking
```

```text
include('simpleicons-5/M/Majorleaguehacking')
```



| Illustration | Majorleaguehacking |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Majorleaguehacking.png) | ![illustration for Majorleaguehacking](../../simpleicons-5/M/Majorleaguehacking.Local.png) |




## Majorleaguehacking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Majorleaguehacking
include('simpleicons-5/M/Majorleaguehacking')

' renders the element
Majorleaguehacking('Majorleaguehacking', 'Majorleaguehacking', 'an optional tech label')
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

' loads the Item which embeds the element Majorleaguehacking
include('simpleicons-5/M/Majorleaguehacking')

' renders the element
Majorleaguehacking('Majorleaguehacking', 'Majorleaguehacking', 'an optional tech label')
@enduml
```

