# Wikivoyage


```text
simpleicons-5/W/Wikivoyage
```

```text
include('simpleicons-5/W/Wikivoyage')
```



| Illustration | Wikivoyage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wikivoyage.png) | ![illustration for Wikivoyage](../../simpleicons-5/W/Wikivoyage.Local.png) |




## Wikivoyage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wikivoyage
include('simpleicons-5/W/Wikivoyage')

' renders the element
Wikivoyage('Wikivoyage', 'Wikivoyage', 'an optional tech label')
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

' loads the Item which embeds the element Wikivoyage
include('simpleicons-5/W/Wikivoyage')

' renders the element
Wikivoyage('Wikivoyage', 'Wikivoyage', 'an optional tech label')
@enduml
```

