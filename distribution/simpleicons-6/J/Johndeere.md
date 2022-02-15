# Johndeere


```text
simpleicons-6/J/Johndeere
```

```text
include('simpleicons-6/J/Johndeere')
```



| Illustration | Johndeere |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Johndeere.png) | ![illustration for Johndeere](../../simpleicons-6/J/Johndeere.Local.png) |




## Johndeere

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Johndeere
include('simpleicons-6/J/Johndeere')

' renders the element
Johndeere('Johndeere', 'Johndeere', 'an optional tech label')
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

' loads the Item which embeds the element Johndeere
include('simpleicons-6/J/Johndeere')

' renders the element
Johndeere('Johndeere', 'Johndeere', 'an optional tech label')
@enduml
```

