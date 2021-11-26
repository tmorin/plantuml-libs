# Dcentertainment


```text
simpleicons-5/D/Dcentertainment
```

```text
include('simpleicons-5/D/Dcentertainment')
```



| Illustration | Dcentertainment |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dcentertainment.png) | ![illustration for Dcentertainment](../../simpleicons-5/D/Dcentertainment.Local.png) |




## Dcentertainment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dcentertainment
include('simpleicons-5/D/Dcentertainment')

' renders the element
Dcentertainment('Dcentertainment', 'Dcentertainment', 'an optional tech label')
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

' loads the Item which embeds the element Dcentertainment
include('simpleicons-5/D/Dcentertainment')

' renders the element
Dcentertainment('Dcentertainment', 'Dcentertainment', 'an optional tech label')
@enduml
```

