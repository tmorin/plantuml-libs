# Plangrid


```text
simpleicons-8/P/Plangrid
```

```text
include('simpleicons-8/P/Plangrid')
```



| Illustration | Plangrid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Plangrid.png) | ![illustration for Plangrid](../../simpleicons-8/P/Plangrid.Local.png) |




## Plangrid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Plangrid
include('simpleicons-8/P/Plangrid')

' renders the element
Plangrid('Plangrid', 'Plangrid', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Plangrid
include('simpleicons-8/P/Plangrid')

' renders the element
Plangrid('Plangrid', 'Plangrid', 'an optional tech label', 'an optional description')
@enduml
```

