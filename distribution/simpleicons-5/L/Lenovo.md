# Lenovo


```text
simpleicons-5/L/Lenovo
```

```text
include('simpleicons-5/L/Lenovo')
```



| Illustration | Lenovo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lenovo.png) | ![illustration for Lenovo](../../simpleicons-5/L/Lenovo.Local.png) |




## Lenovo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lenovo
include('simpleicons-5/L/Lenovo')

' renders the element
Lenovo('Lenovo', 'Lenovo', 'an optional tech label')
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

' loads the Item which embeds the element Lenovo
include('simpleicons-5/L/Lenovo')

' renders the element
Lenovo('Lenovo', 'Lenovo', 'an optional tech label')
@enduml
```

