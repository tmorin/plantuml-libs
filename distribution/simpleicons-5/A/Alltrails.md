# Alltrails


```text
simpleicons-5/A/Alltrails
```

```text
include('simpleicons-5/A/Alltrails')
```



| Illustration | Alltrails |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Alltrails.png) | ![illustration for Alltrails](../../simpleicons-5/A/Alltrails.Local.png) |




## Alltrails

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Alltrails
include('simpleicons-5/A/Alltrails')

' renders the element
Alltrails('Alltrails', 'Alltrails', 'an optional tech label')
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

' loads the Item which embeds the element Alltrails
include('simpleicons-5/A/Alltrails')

' renders the element
Alltrails('Alltrails', 'Alltrails', 'an optional tech label')
@enduml
```

