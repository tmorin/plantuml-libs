# Atlassian


```text
simpleicons-14/A/Atlassian
```

```text
include('simpleicons-14/A/Atlassian')
```



| Illustration | Atlassian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Atlassian.png) | ![illustration for Atlassian](../../simpleicons-14/A/Atlassian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtlassianXs>`
- `<$AtlassianSm>`
- `<$AtlassianMd>`
- `<$AtlassianLg>`





## Atlassian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Atlassian
include('simpleicons-14/A/Atlassian')

' renders the element
Atlassian('Atlassian', 'Atlassian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Atlassian
include('simpleicons-14/A/Atlassian')

' renders the element
Atlassian('Atlassian', 'Atlassian', 'an optional tech label', 'an optional description')
@enduml
```

