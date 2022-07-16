# Shadow


```text
simpleicons-7/S/Shadow
```

```text
include('simpleicons-7/S/Shadow')
```



| Illustration | Shadow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Shadow.png) | ![illustration for Shadow](../../simpleicons-7/S/Shadow.Local.png) |




## Shadow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Shadow
include('simpleicons-7/S/Shadow')

' renders the element
Shadow('Shadow', 'Shadow', 'an optional tech label')
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

' loads the Item which embeds the element Shadow
include('simpleicons-7/S/Shadow')

' renders the element
Shadow('Shadow', 'Shadow', 'an optional tech label')
@enduml
```

