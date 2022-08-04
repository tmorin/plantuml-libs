# Paperspace


```text
simpleicons-7/P/Paperspace
```

```text
include('simpleicons-7/P/Paperspace')
```



| Illustration | Paperspace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Paperspace.png) | ![illustration for Paperspace](../../simpleicons-7/P/Paperspace.Local.png) |




## Paperspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Paperspace
include('simpleicons-7/P/Paperspace')

' renders the element
Paperspace('Paperspace', 'Paperspace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paperspace
include('simpleicons-7/P/Paperspace')

' renders the element
Paperspace('Paperspace', 'Paperspace', 'an optional tech label', 'an optional description')
@enduml
```

