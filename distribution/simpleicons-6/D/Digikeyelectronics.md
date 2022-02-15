# Digikeyelectronics


```text
simpleicons-6/D/Digikeyelectronics
```

```text
include('simpleicons-6/D/Digikeyelectronics')
```



| Illustration | Digikeyelectronics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Digikeyelectronics.png) | ![illustration for Digikeyelectronics](../../simpleicons-6/D/Digikeyelectronics.Local.png) |




## Digikeyelectronics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Digikeyelectronics
include('simpleicons-6/D/Digikeyelectronics')

' renders the element
Digikeyelectronics('Digikeyelectronics', 'Digikeyelectronics', 'an optional tech label')
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

' loads the Item which embeds the element Digikeyelectronics
include('simpleicons-6/D/Digikeyelectronics')

' renders the element
Digikeyelectronics('Digikeyelectronics', 'Digikeyelectronics', 'an optional tech label')
@enduml
```

