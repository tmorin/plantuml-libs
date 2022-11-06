# Resharper


```text
simpleicons-7/R/Resharper
```

```text
include('simpleicons-7/R/Resharper')
```



| Illustration | Resharper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Resharper.png) | ![illustration for Resharper](../../simpleicons-7/R/Resharper.Local.png) |




## Resharper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Resharper
include('simpleicons-7/R/Resharper')

' renders the element
Resharper('Resharper', 'Resharper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Resharper
include('simpleicons-7/R/Resharper')

' renders the element
Resharper('Resharper', 'Resharper', 'an optional tech label', 'an optional description')
@enduml
```

