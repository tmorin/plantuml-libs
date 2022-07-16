# Stackedit


```text
simpleicons-7/S/Stackedit
```

```text
include('simpleicons-7/S/Stackedit')
```



| Illustration | Stackedit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Stackedit.png) | ![illustration for Stackedit](../../simpleicons-7/S/Stackedit.Local.png) |




## Stackedit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackedit
include('simpleicons-7/S/Stackedit')

' renders the element
Stackedit('Stackedit', 'Stackedit', 'an optional tech label')
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

' loads the Item which embeds the element Stackedit
include('simpleicons-7/S/Stackedit')

' renders the element
Stackedit('Stackedit', 'Stackedit', 'an optional tech label')
@enduml
```

