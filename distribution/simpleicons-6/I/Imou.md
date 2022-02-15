# Imou


```text
simpleicons-6/I/Imou
```

```text
include('simpleicons-6/I/Imou')
```



| Illustration | Imou |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Imou.png) | ![illustration for Imou](../../simpleicons-6/I/Imou.Local.png) |




## Imou

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Imou
include('simpleicons-6/I/Imou')

' renders the element
Imou('Imou', 'Imou', 'an optional tech label')
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

' loads the Item which embeds the element Imou
include('simpleicons-6/I/Imou')

' renders the element
Imou('Imou', 'Imou', 'an optional tech label')
@enduml
```

