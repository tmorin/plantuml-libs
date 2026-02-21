# CreativeCommonsNcEu


```text
fontawesome/Brands/CreativeCommonsNcEu
```

```text
include('fontawesome/Brands/CreativeCommonsNcEu')
```



| Illustration | CreativeCommonsNcEu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsNcEu.png) | ![illustration for CreativeCommonsNcEu](../../fontawesome/Brands/CreativeCommonsNcEu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsNcEuXs>`
- `<$CreativeCommonsNcEuSm>`
- `<$CreativeCommonsNcEuMd>`
- `<$CreativeCommonsNcEuLg>`





## CreativeCommonsNcEu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsNcEu
include('fontawesome/Brands/CreativeCommonsNcEu')

' renders the element
CreativeCommonsNcEu('CreativeCommonsNcEu', 'Creative Commons Nc Eu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsNcEu
include('fontawesome/Brands/CreativeCommonsNcEu')

' renders the element
CreativeCommonsNcEu('CreativeCommonsNcEu', 'Creative Commons Nc Eu', 'an optional tech label', 'an optional description')
@enduml
```

