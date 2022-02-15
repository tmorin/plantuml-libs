# Symfony


```text
simpleicons-6/S/Symfony
```

```text
include('simpleicons-6/S/Symfony')
```



| Illustration | Symfony |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Symfony.png) | ![illustration for Symfony](../../simpleicons-6/S/Symfony.Local.png) |




## Symfony

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Symfony
include('simpleicons-6/S/Symfony')

' renders the element
Symfony('Symfony', 'Symfony', 'an optional tech label')
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

' loads the Item which embeds the element Symfony
include('simpleicons-6/S/Symfony')

' renders the element
Symfony('Symfony', 'Symfony', 'an optional tech label')
@enduml
```

