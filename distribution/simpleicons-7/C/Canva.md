# Canva


```text
simpleicons-7/C/Canva
```

```text
include('simpleicons-7/C/Canva')
```



| Illustration | Canva |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Canva.png) | ![illustration for Canva](../../simpleicons-7/C/Canva.Local.png) |




## Canva

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Canva
include('simpleicons-7/C/Canva')

' renders the element
Canva('Canva', 'Canva', 'an optional tech label')
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

' loads the Item which embeds the element Canva
include('simpleicons-7/C/Canva')

' renders the element
Canva('Canva', 'Canva', 'an optional tech label')
@enduml
```

