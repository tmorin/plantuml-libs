# Docusign


```text
simpleicons-14/D/Docusign
```

```text
include('simpleicons-14/D/Docusign')
```



| Illustration | Docusign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Docusign.png) | ![illustration for Docusign](../../simpleicons-14/D/Docusign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DocusignXs>`
- `<$DocusignSm>`
- `<$DocusignMd>`
- `<$DocusignLg>`





## Docusign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Docusign
include('simpleicons-14/D/Docusign')

' renders the element
Docusign('Docusign', 'Docusign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Docusign
include('simpleicons-14/D/Docusign')

' renders the element
Docusign('Docusign', 'Docusign', 'an optional tech label', 'an optional description')
@enduml
```

