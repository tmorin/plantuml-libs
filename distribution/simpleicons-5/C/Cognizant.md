# Cognizant


```text
simpleicons-5/C/Cognizant
```

```text
include('simpleicons-5/C/Cognizant')
```



| Illustration | Cognizant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cognizant.png) | ![illustration for Cognizant](../../simpleicons-5/C/Cognizant.Local.png) |




## Cognizant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cognizant
include('simpleicons-5/C/Cognizant')

' renders the element
Cognizant('Cognizant', 'Cognizant', 'an optional tech label')
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

' loads the Item which embeds the element Cognizant
include('simpleicons-5/C/Cognizant')

' renders the element
Cognizant('Cognizant', 'Cognizant', 'an optional tech label')
@enduml
```

