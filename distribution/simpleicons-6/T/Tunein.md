# Tunein


```text
simpleicons-6/T/Tunein
```

```text
include('simpleicons-6/T/Tunein')
```



| Illustration | Tunein |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tunein.png) | ![illustration for Tunein](../../simpleicons-6/T/Tunein.Local.png) |




## Tunein

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tunein
include('simpleicons-6/T/Tunein')

' renders the element
Tunein('Tunein', 'Tunein', 'an optional tech label')
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

' loads the Item which embeds the element Tunein
include('simpleicons-6/T/Tunein')

' renders the element
Tunein('Tunein', 'Tunein', 'an optional tech label')
@enduml
```

