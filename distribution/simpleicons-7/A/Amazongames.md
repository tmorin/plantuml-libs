# Amazongames


```text
simpleicons-7/A/Amazongames
```

```text
include('simpleicons-7/A/Amazongames')
```



| Illustration | Amazongames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amazongames.png) | ![illustration for Amazongames](../../simpleicons-7/A/Amazongames.Local.png) |




## Amazongames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazongames
include('simpleicons-7/A/Amazongames')

' renders the element
Amazongames('Amazongames', 'Amazongames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazongames
include('simpleicons-7/A/Amazongames')

' renders the element
Amazongames('Amazongames', 'Amazongames', 'an optional tech label', 'an optional description')
@enduml
```

