# Delonghi


```text
simpleicons-5/D/Delonghi
```

```text
include('simpleicons-5/D/Delonghi')
```



| Illustration | Delonghi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Delonghi.png) | ![illustration for Delonghi](../../simpleicons-5/D/Delonghi.Local.png) |




## Delonghi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Delonghi
include('simpleicons-5/D/Delonghi')

' renders the element
Delonghi('Delonghi', 'Delonghi', 'an optional tech label')
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

' loads the Item which embeds the element Delonghi
include('simpleicons-5/D/Delonghi')

' renders the element
Delonghi('Delonghi', 'Delonghi', 'an optional tech label')
@enduml
```

