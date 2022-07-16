# Nette


```text
simpleicons-7/N/Nette
```

```text
include('simpleicons-7/N/Nette')
```



| Illustration | Nette |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nette.png) | ![illustration for Nette](../../simpleicons-7/N/Nette.Local.png) |




## Nette

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nette
include('simpleicons-7/N/Nette')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nette
include('simpleicons-7/N/Nette')

' renders the element
Nette('Nette', 'Nette', 'an optional tech label')
@enduml
```

