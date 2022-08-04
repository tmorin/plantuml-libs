# Smashdotgg


```text
simpleicons-7/S/Smashdotgg
```

```text
include('simpleicons-7/S/Smashdotgg')
```



| Illustration | Smashdotgg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Smashdotgg.png) | ![illustration for Smashdotgg](../../simpleicons-7/S/Smashdotgg.Local.png) |




## Smashdotgg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smashdotgg
include('simpleicons-7/S/Smashdotgg')

' renders the element
Smashdotgg('Smashdotgg', 'Smashdotgg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smashdotgg
include('simpleicons-7/S/Smashdotgg')

' renders the element
Smashdotgg('Smashdotgg', 'Smashdotgg', 'an optional tech label', 'an optional description')
@enduml
```

