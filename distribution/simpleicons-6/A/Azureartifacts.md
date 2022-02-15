# Azureartifacts


```text
simpleicons-6/A/Azureartifacts
```

```text
include('simpleicons-6/A/Azureartifacts')
```



| Illustration | Azureartifacts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Azureartifacts.png) | ![illustration for Azureartifacts](../../simpleicons-6/A/Azureartifacts.Local.png) |




## Azureartifacts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Azureartifacts
include('simpleicons-6/A/Azureartifacts')

' renders the element
Azureartifacts('Azureartifacts', 'Azureartifacts', 'an optional tech label')
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

' loads the Item which embeds the element Azureartifacts
include('simpleicons-6/A/Azureartifacts')

' renders the element
Azureartifacts('Azureartifacts', 'Azureartifacts', 'an optional tech label')
@enduml
```

