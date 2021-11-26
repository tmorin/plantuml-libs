# Themodelsresource


```text
simpleicons-5/T/Themodelsresource
```

```text
include('simpleicons-5/T/Themodelsresource')
```



| Illustration | Themodelsresource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Themodelsresource.png) | ![illustration for Themodelsresource](../../simpleicons-5/T/Themodelsresource.Local.png) |




## Themodelsresource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Themodelsresource
include('simpleicons-5/T/Themodelsresource')

' renders the element
Themodelsresource('Themodelsresource', 'Themodelsresource', 'an optional tech label')
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

' loads the Item which embeds the element Themodelsresource
include('simpleicons-5/T/Themodelsresource')

' renders the element
Themodelsresource('Themodelsresource', 'Themodelsresource', 'an optional tech label')
@enduml
```

