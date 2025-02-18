# Azureartifacts


```text
simpleicons-14/A/Azureartifacts
```

```text
include('simpleicons-14/A/Azureartifacts')
```



| Illustration | Azureartifacts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Azureartifacts.png) | ![illustration for Azureartifacts](../../simpleicons-14/A/Azureartifacts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AzureartifactsXs>`
- `<$AzureartifactsSm>`
- `<$AzureartifactsMd>`
- `<$AzureartifactsLg>`





## Azureartifacts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Azureartifacts
include('simpleicons-14/A/Azureartifacts')

' renders the element
Azureartifacts('Azureartifacts', 'Azureartifacts', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Azureartifacts
include('simpleicons-14/A/Azureartifacts')

' renders the element
Azureartifacts('Azureartifacts', 'Azureartifacts', 'an optional tech label', 'an optional description')
@enduml
```

