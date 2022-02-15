# Autodesk


```text
simpleicons-6/A/Autodesk
```

```text
include('simpleicons-6/A/Autodesk')
```



| Illustration | Autodesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Autodesk.png) | ![illustration for Autodesk](../../simpleicons-6/A/Autodesk.Local.png) |




## Autodesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Autodesk
include('simpleicons-6/A/Autodesk')

' renders the element
Autodesk('Autodesk', 'Autodesk', 'an optional tech label')
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

' loads the Item which embeds the element Autodesk
include('simpleicons-6/A/Autodesk')

' renders the element
Autodesk('Autodesk', 'Autodesk', 'an optional tech label')
@enduml
```

