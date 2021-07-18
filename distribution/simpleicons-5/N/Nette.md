# Nette


```text
simpleicons-5/N/Nette
```

```text
include('simpleicons-5/N/Nette')
```



| Illustration | Nette |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nette.png) | ![illustration for Nette](../../simpleicons-5/N/Nette.Local.png) |




## Nette

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nette
include('simpleicons-5/N/Nette')

' renders the element
Nette('Nette', 'Nette', 'an optional tech label')
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

' loads the Item which embeds the element Nette
include('simpleicons-5/N/Nette')

' renders the element
Nette('Nette', 'Nette', 'an optional tech label')
@enduml
```

