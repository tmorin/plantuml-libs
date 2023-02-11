# Ardour


```text
simpleicons-8/A/Ardour
```

```text
include('simpleicons-8/A/Ardour')
```



| Illustration | Ardour |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Ardour.png) | ![illustration for Ardour](../../simpleicons-8/A/Ardour.Local.png) |




## Ardour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ardour
include('simpleicons-8/A/Ardour')

' renders the element
Ardour('Ardour', 'Ardour', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ardour
include('simpleicons-8/A/Ardour')

' renders the element
Ardour('Ardour', 'Ardour', 'an optional tech label', 'an optional description')
@enduml
```

