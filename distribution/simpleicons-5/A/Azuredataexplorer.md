# Azuredataexplorer


```text
simpleicons-5/A/Azuredataexplorer
```

```text
include('simpleicons-5/A/Azuredataexplorer')
```



| Illustration | Azuredataexplorer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Azuredataexplorer.png) | ![illustration for Azuredataexplorer](../../simpleicons-5/A/Azuredataexplorer.Local.png) |




## Azuredataexplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Azuredataexplorer
include('simpleicons-5/A/Azuredataexplorer')

' renders the element
Azuredataexplorer('Azuredataexplorer', 'Azuredataexplorer', 'an optional tech label')
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

' loads the Item which embeds the element Azuredataexplorer
include('simpleicons-5/A/Azuredataexplorer')

' renders the element
Azuredataexplorer('Azuredataexplorer', 'Azuredataexplorer', 'an optional tech label')
@enduml
```

