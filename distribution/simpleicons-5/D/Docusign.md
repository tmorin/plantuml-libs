# Docusign


```text
simpleicons-5/D/Docusign
```

```text
include('simpleicons-5/D/Docusign')
```



| Illustration | Docusign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Docusign.png) | ![illustration for Docusign](../../simpleicons-5/D/Docusign.Local.png) |




## Docusign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Docusign
include('simpleicons-5/D/Docusign')

' renders the element
Docusign('Docusign', 'Docusign', 'an optional tech label')
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

' loads the Item which embeds the element Docusign
include('simpleicons-5/D/Docusign')

' renders the element
Docusign('Docusign', 'Docusign', 'an optional tech label')
@enduml
```

