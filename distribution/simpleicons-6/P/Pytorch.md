# Pytorch


```text
simpleicons-6/P/Pytorch
```

```text
include('simpleicons-6/P/Pytorch')
```



| Illustration | Pytorch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pytorch.png) | ![illustration for Pytorch](../../simpleicons-6/P/Pytorch.Local.png) |




## Pytorch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pytorch
include('simpleicons-6/P/Pytorch')

' renders the element
Pytorch('Pytorch', 'Pytorch', 'an optional tech label')
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

' loads the Item which embeds the element Pytorch
include('simpleicons-6/P/Pytorch')

' renders the element
Pytorch('Pytorch', 'Pytorch', 'an optional tech label')
@enduml
```

