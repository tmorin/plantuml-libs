# Alltrails


```text
simpleicons-7/A/Alltrails
```

```text
include('simpleicons-7/A/Alltrails')
```



| Illustration | Alltrails |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Alltrails.png) | ![illustration for Alltrails](../../simpleicons-7/A/Alltrails.Local.png) |




## Alltrails

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alltrails
include('simpleicons-7/A/Alltrails')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alltrails
include('simpleicons-7/A/Alltrails')

' renders the element
Alltrails('Alltrails', 'Alltrails', 'an optional tech label')
@enduml
```

