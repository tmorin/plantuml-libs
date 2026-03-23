# Notion


```text
fontawesome/Brands/Notion
```

```text
include('fontawesome/Brands/Notion')
```



| Illustration | Notion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Notion.png) | ![illustration for Notion](../../fontawesome/Brands/Notion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotionXs>`
- `<$NotionSm>`
- `<$NotionMd>`
- `<$NotionLg>`





## Notion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Notion
include('fontawesome/Brands/Notion')

' renders the element
Notion('Notion', 'Notion', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Notion
include('fontawesome/Brands/Notion')

' renders the element
Notion('Notion', 'Notion', 'an optional tech label', 'an optional description')
@enduml
```

