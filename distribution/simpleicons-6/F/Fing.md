# Fing


```text
simpleicons-6/F/Fing
```

```text
include('simpleicons-6/F/Fing')
```



| Illustration | Fing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fing.png) | ![illustration for Fing](../../simpleicons-6/F/Fing.Local.png) |




## Fing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fing
include('simpleicons-6/F/Fing')

' renders the element
Fing('Fing', 'Fing', 'an optional tech label')
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

' loads the Item which embeds the element Fing
include('simpleicons-6/F/Fing')

' renders the element
Fing('Fing', 'Fing', 'an optional tech label')
@enduml
```

