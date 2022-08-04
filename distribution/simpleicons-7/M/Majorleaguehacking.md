# Majorleaguehacking


```text
simpleicons-7/M/Majorleaguehacking
```

```text
include('simpleicons-7/M/Majorleaguehacking')
```



| Illustration | Majorleaguehacking |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Majorleaguehacking.png) | ![illustration for Majorleaguehacking](../../simpleicons-7/M/Majorleaguehacking.Local.png) |




## Majorleaguehacking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Majorleaguehacking
include('simpleicons-7/M/Majorleaguehacking')

' renders the element
Majorleaguehacking('Majorleaguehacking', 'Majorleaguehacking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Majorleaguehacking
include('simpleicons-7/M/Majorleaguehacking')

' renders the element
Majorleaguehacking('Majorleaguehacking', 'Majorleaguehacking', 'an optional tech label', 'an optional description')
@enduml
```

