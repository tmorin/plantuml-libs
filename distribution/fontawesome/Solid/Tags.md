# Tags


```text
fontawesome/Solid/Tags
```

```text
include('fontawesome/Solid/Tags')
```



| Illustration | Tags |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tags.png) | ![illustration for Tags](../../fontawesome/Solid/Tags.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TagsXs>`
- `<$TagsSm>`
- `<$TagsMd>`
- `<$TagsLg>`





## Tags

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tags
include('fontawesome/Solid/Tags')

' renders the element
Tags('Tags', 'Tags', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tags
include('fontawesome/Solid/Tags')

' renders the element
Tags('Tags', 'Tags', 'an optional tech label', 'an optional description')
@enduml
```

