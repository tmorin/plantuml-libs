# Obsidian


```text
fontawesome/Brands/Obsidian
```

```text
include('fontawesome/Brands/Obsidian')
```



| Illustration | Obsidian |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Obsidian.png) | ![illustration for Obsidian](../../fontawesome/Brands/Obsidian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ObsidianXs>`
- `<$ObsidianSm>`
- `<$ObsidianMd>`
- `<$ObsidianLg>`





## Obsidian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Obsidian
include('fontawesome/Brands/Obsidian')

' renders the element
Obsidian('Obsidian', 'Obsidian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Obsidian
include('fontawesome/Brands/Obsidian')

' renders the element
Obsidian('Obsidian', 'Obsidian', 'an optional tech label', 'an optional description')
@enduml
```

