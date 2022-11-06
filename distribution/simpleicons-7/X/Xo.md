# Xo


```text
simpleicons-7/X/Xo
```

```text
include('simpleicons-7/X/Xo')
```



| Illustration | Xo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/X/Xo.png) | ![illustration for Xo](../../simpleicons-7/X/Xo.Local.png) |




## Xo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Xo
include('simpleicons-7/X/Xo')

' renders the element
Xo('Xo', 'Xo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xo
include('simpleicons-7/X/Xo')

' renders the element
Xo('Xo', 'Xo', 'an optional tech label', 'an optional description')
@enduml
```

