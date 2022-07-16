# Itchdotio


```text
simpleicons-7/I/Itchdotio
```

```text
include('simpleicons-7/I/Itchdotio')
```



| Illustration | Itchdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Itchdotio.png) | ![illustration for Itchdotio](../../simpleicons-7/I/Itchdotio.Local.png) |




## Itchdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Itchdotio
include('simpleicons-7/I/Itchdotio')

' renders the element
Itchdotio('Itchdotio', 'Itchdotio', 'an optional tech label')
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

' loads the Item which embeds the element Itchdotio
include('simpleicons-7/I/Itchdotio')

' renders the element
Itchdotio('Itchdotio', 'Itchdotio', 'an optional tech label')
@enduml
```

