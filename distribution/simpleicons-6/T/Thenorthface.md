# Thenorthface


```text
simpleicons-6/T/Thenorthface
```

```text
include('simpleicons-6/T/Thenorthface')
```



| Illustration | Thenorthface |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Thenorthface.png) | ![illustration for Thenorthface](../../simpleicons-6/T/Thenorthface.Local.png) |




## Thenorthface

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Thenorthface
include('simpleicons-6/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label')
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

' loads the Item which embeds the element Thenorthface
include('simpleicons-6/T/Thenorthface')

' renders the element
Thenorthface('Thenorthface', 'Thenorthface', 'an optional tech label')
@enduml
```

