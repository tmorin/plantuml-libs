# Autodesk


```text
simpleicons-7/A/Autodesk
```

```text
include('simpleicons-7/A/Autodesk')
```



| Illustration | Autodesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Autodesk.png) | ![illustration for Autodesk](../../simpleicons-7/A/Autodesk.Local.png) |




## Autodesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Autodesk
include('simpleicons-7/A/Autodesk')

' renders the element
Autodesk('Autodesk', 'Autodesk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autodesk
include('simpleicons-7/A/Autodesk')

' renders the element
Autodesk('Autodesk', 'Autodesk', 'an optional tech label', 'an optional description')
@enduml
```
