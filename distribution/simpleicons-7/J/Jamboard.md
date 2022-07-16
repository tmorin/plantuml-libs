# Jamboard


```text
simpleicons-7/J/Jamboard
```

```text
include('simpleicons-7/J/Jamboard')
```



| Illustration | Jamboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jamboard.png) | ![illustration for Jamboard](../../simpleicons-7/J/Jamboard.Local.png) |




## Jamboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jamboard
include('simpleicons-7/J/Jamboard')

' renders the element
Jamboard('Jamboard', 'Jamboard', 'an optional tech label')
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

' loads the Item which embeds the element Jamboard
include('simpleicons-7/J/Jamboard')

' renders the element
Jamboard('Jamboard', 'Jamboard', 'an optional tech label')
@enduml
```

