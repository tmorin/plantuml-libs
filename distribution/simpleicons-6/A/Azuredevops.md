# Azuredevops


```text
simpleicons-6/A/Azuredevops
```

```text
include('simpleicons-6/A/Azuredevops')
```



| Illustration | Azuredevops |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Azuredevops.png) | ![illustration for Azuredevops](../../simpleicons-6/A/Azuredevops.Local.png) |




## Azuredevops

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Azuredevops
include('simpleicons-6/A/Azuredevops')

' renders the element
Azuredevops('Azuredevops', 'Azuredevops', 'an optional tech label')
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

' loads the Item which embeds the element Azuredevops
include('simpleicons-6/A/Azuredevops')

' renders the element
Azuredevops('Azuredevops', 'Azuredevops', 'an optional tech label')
@enduml
```

