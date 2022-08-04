# Ardour


```text
simpleicons-7/A/Ardour
```

```text
include('simpleicons-7/A/Ardour')
```



| Illustration | Ardour |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Ardour.png) | ![illustration for Ardour](../../simpleicons-7/A/Ardour.Local.png) |




## Ardour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ardour
include('simpleicons-7/A/Ardour')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ardour
include('simpleicons-7/A/Ardour')

' renders the element
Ardour('Ardour', 'Ardour', 'an optional tech label', 'an optional description')
@enduml
```

