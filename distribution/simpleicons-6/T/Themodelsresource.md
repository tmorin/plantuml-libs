# Themodelsresource


```text
simpleicons-6/T/Themodelsresource
```

```text
include('simpleicons-6/T/Themodelsresource')
```



| Illustration | Themodelsresource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Themodelsresource.png) | ![illustration for Themodelsresource](../../simpleicons-6/T/Themodelsresource.Local.png) |




## Themodelsresource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Themodelsresource
include('simpleicons-6/T/Themodelsresource')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Themodelsresource
include('simpleicons-6/T/Themodelsresource')

' renders the element
Themodelsresource('Themodelsresource', 'Themodelsresource', 'an optional tech label')
@enduml
```

