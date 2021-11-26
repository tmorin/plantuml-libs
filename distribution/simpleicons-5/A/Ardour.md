# Ardour


```text
simpleicons-5/A/Ardour
```

```text
include('simpleicons-5/A/Ardour')
```



| Illustration | Ardour |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Ardour.png) | ![illustration for Ardour](../../simpleicons-5/A/Ardour.Local.png) |




## Ardour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ardour
include('simpleicons-5/A/Ardour')

' renders the element
Ardour('Ardour', 'Ardour', 'an optional tech label')
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

' loads the Item which embeds the element Ardour
include('simpleicons-5/A/Ardour')

' renders the element
Ardour('Ardour', 'Ardour', 'an optional tech label')
@enduml
```

