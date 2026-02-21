# CreativeCommonsRemix


```text
fontawesome/Brands/CreativeCommonsRemix
```

```text
include('fontawesome/Brands/CreativeCommonsRemix')
```



| Illustration | CreativeCommonsRemix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsRemix.png) | ![illustration for CreativeCommonsRemix](../../fontawesome/Brands/CreativeCommonsRemix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsRemixXs>`
- `<$CreativeCommonsRemixSm>`
- `<$CreativeCommonsRemixMd>`
- `<$CreativeCommonsRemixLg>`





## CreativeCommonsRemix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsRemix
include('fontawesome/Brands/CreativeCommonsRemix')

' renders the element
CreativeCommonsRemix('CreativeCommonsRemix', 'Creative Commons Remix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsRemix
include('fontawesome/Brands/CreativeCommonsRemix')

' renders the element
CreativeCommonsRemix('CreativeCommonsRemix', 'Creative Commons Remix', 'an optional tech label', 'an optional description')
@enduml
```

