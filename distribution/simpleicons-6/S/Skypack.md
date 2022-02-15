# Skypack


```text
simpleicons-6/S/Skypack
```

```text
include('simpleicons-6/S/Skypack')
```



| Illustration | Skypack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Skypack.png) | ![illustration for Skypack](../../simpleicons-6/S/Skypack.Local.png) |




## Skypack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Skypack
include('simpleicons-6/S/Skypack')

' renders the element
Skypack('Skypack', 'Skypack', 'an optional tech label')
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

' loads the Item which embeds the element Skypack
include('simpleicons-6/S/Skypack')

' renders the element
Skypack('Skypack', 'Skypack', 'an optional tech label')
@enduml
```

