# CreativeCommonsNc


```text
fontawesome-6/Brands/CreativeCommonsNc
```

```text
include('fontawesome-6/Brands/CreativeCommonsNc')
```



| Illustration | CreativeCommonsNc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsNc.png) | ![illustration for CreativeCommonsNc](../../fontawesome-6/Brands/CreativeCommonsNc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsNcXs>`
- `<$CreativeCommonsNcSm>`
- `<$CreativeCommonsNcMd>`
- `<$CreativeCommonsNcLg>`





## CreativeCommonsNc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsNc
include('fontawesome-6/Brands/CreativeCommonsNc')

' renders the element
CreativeCommonsNc('CreativeCommonsNc', 'Creative Commons Nc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsNc
include('fontawesome-6/Brands/CreativeCommonsNc')

' renders the element
CreativeCommonsNc('CreativeCommonsNc', 'Creative Commons Nc', 'an optional tech label', 'an optional description')
@enduml
```

