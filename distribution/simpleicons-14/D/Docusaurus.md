# Docusaurus


```text
simpleicons-14/D/Docusaurus
```

```text
include('simpleicons-14/D/Docusaurus')
```



| Illustration | Docusaurus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Docusaurus.png) | ![illustration for Docusaurus](../../simpleicons-14/D/Docusaurus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DocusaurusXs>`
- `<$DocusaurusSm>`
- `<$DocusaurusMd>`
- `<$DocusaurusLg>`





## Docusaurus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Docusaurus
include('simpleicons-14/D/Docusaurus')

' renders the element
Docusaurus('Docusaurus', 'Docusaurus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Docusaurus
include('simpleicons-14/D/Docusaurus')

' renders the element
Docusaurus('Docusaurus', 'Docusaurus', 'an optional tech label', 'an optional description')
@enduml
```

