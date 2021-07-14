# Assemblyscript


```text
simpleicons-5/A/Assemblyscript
```

```text
include('simpleicons-5/A/Assemblyscript')
```



| Illustration | Assemblyscript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Assemblyscript.png) | ![illustration for Assemblyscript](../../simpleicons-5/A/Assemblyscript.Local.png) |




## Assemblyscript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Assemblyscript
include('simpleicons-5/A/Assemblyscript')

' renders the element
Assemblyscript('Assemblyscript', 'Assemblyscript', 'an optional tech label')
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

' loads the Item which embeds the element Assemblyscript
include('simpleicons-5/A/Assemblyscript')

' renders the element
Assemblyscript('Assemblyscript', 'Assemblyscript', 'an optional tech label')
@enduml
```

