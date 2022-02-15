# Azuredataexplorer


```text
simpleicons-6/A/Azuredataexplorer
```

```text
include('simpleicons-6/A/Azuredataexplorer')
```



| Illustration | Azuredataexplorer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Azuredataexplorer.png) | ![illustration for Azuredataexplorer](../../simpleicons-6/A/Azuredataexplorer.Local.png) |




## Azuredataexplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Azuredataexplorer
include('simpleicons-6/A/Azuredataexplorer')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Azuredataexplorer
include('simpleicons-6/A/Azuredataexplorer')

' renders the element
Azuredataexplorer('Azuredataexplorer', 'Azuredataexplorer', 'an optional tech label')
@enduml
```

