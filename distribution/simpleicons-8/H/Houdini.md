# Houdini


```text
simpleicons-8/H/Houdini
```

```text
include('simpleicons-8/H/Houdini')
```



| Illustration | Houdini |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Houdini.png) | ![illustration for Houdini](../../simpleicons-8/H/Houdini.Local.png) |




## Houdini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Houdini
include('simpleicons-8/H/Houdini')

' renders the element
Houdini('Houdini', 'Houdini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Houdini
include('simpleicons-8/H/Houdini')

' renders the element
Houdini('Houdini', 'Houdini', 'an optional tech label', 'an optional description')
@enduml
```

