# Thenorthface


```text
simpleicons-8/T/Thenorthface
```

```text
include('simpleicons-8/T/Thenorthface')
```



| Illustration | Thenorthface |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Thenorthface.png) | ![illustration for Thenorthface](../../simpleicons-8/T/Thenorthface.Local.png) |




## Thenorthface

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Thenorthface
include('simpleicons-8/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thenorthface
include('simpleicons-8/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label', 'an optional description')
@enduml
```

