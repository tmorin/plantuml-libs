# CreativeCommonsRemix


```text
fontawesome-6/Brands/CreativeCommonsRemix
```

```text
include('fontawesome-6/Brands/CreativeCommonsRemix')
```



| Illustration | CreativeCommonsRemix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsRemix.png) | ![illustration for CreativeCommonsRemix](../../fontawesome-6/Brands/CreativeCommonsRemix.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsRemix
include('fontawesome-6/Brands/CreativeCommonsRemix')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsRemix
include('fontawesome-6/Brands/CreativeCommonsRemix')

' renders the element
CreativeCommonsRemix('CreativeCommonsRemix', 'Creative Commons Remix', 'an optional tech label', 'an optional description')
@enduml
```

