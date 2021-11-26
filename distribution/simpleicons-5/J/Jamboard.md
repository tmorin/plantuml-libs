# Jamboard


```text
simpleicons-5/J/Jamboard
```

```text
include('simpleicons-5/J/Jamboard')
```



| Illustration | Jamboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jamboard.png) | ![illustration for Jamboard](../../simpleicons-5/J/Jamboard.Local.png) |




## Jamboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jamboard
include('simpleicons-5/J/Jamboard')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jamboard
include('simpleicons-5/J/Jamboard')

' renders the element
Jamboard('Jamboard', 'Jamboard', 'an optional tech label')
@enduml
```

