# Hyper


```text
simpleicons-7/H/Hyper
```

```text
include('simpleicons-7/H/Hyper')
```



| Illustration | Hyper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hyper.png) | ![illustration for Hyper](../../simpleicons-7/H/Hyper.Local.png) |




## Hyper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hyper
include('simpleicons-7/H/Hyper')

' renders the element
Hyper('Hyper', 'Hyper', 'an optional tech label')
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

' loads the Item which embeds the element Hyper
include('simpleicons-7/H/Hyper')

' renders the element
Hyper('Hyper', 'Hyper', 'an optional tech label')
@enduml
```

