# CreativeCommonsShare


```text
fontawesome-6/Brands/CreativeCommonsShare
```

```text
include('fontawesome-6/Brands/CreativeCommonsShare')
```



| Illustration | CreativeCommonsShare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsShare.png) | ![illustration for CreativeCommonsShare](../../fontawesome-6/Brands/CreativeCommonsShare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsShareXs>`
- `<$CreativeCommonsShareSm>`
- `<$CreativeCommonsShareMd>`
- `<$CreativeCommonsShareLg>`





## CreativeCommonsShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsShare
include('fontawesome-6/Brands/CreativeCommonsShare')

' renders the element
CreativeCommonsShare('CreativeCommonsShare', 'Creative Commons Share', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsShare
include('fontawesome-6/Brands/CreativeCommonsShare')

' renders the element
CreativeCommonsShare('CreativeCommonsShare', 'Creative Commons Share', 'an optional tech label', 'an optional description')
@enduml
```

