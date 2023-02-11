# Crayon


```text
simpleicons-8/C/Crayon
```

```text
include('simpleicons-8/C/Crayon')
```



| Illustration | Crayon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Crayon.png) | ![illustration for Crayon](../../simpleicons-8/C/Crayon.Local.png) |




## Crayon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Crayon
include('simpleicons-8/C/Crayon')

' renders the element
Crayon('Crayon', 'Crayon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crayon
include('simpleicons-8/C/Crayon')

' renders the element
Crayon('Crayon', 'Crayon', 'an optional tech label', 'an optional description')
@enduml
```

