# CreativeCommonsNd


```text
fontawesome/Brands/CreativeCommonsNd
```

```text
include('fontawesome/Brands/CreativeCommonsNd')
```



| Illustration | CreativeCommonsNd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsNd.png) | ![illustration for CreativeCommonsNd](../../fontawesome/Brands/CreativeCommonsNd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsNdXs>`
- `<$CreativeCommonsNdSm>`
- `<$CreativeCommonsNdMd>`
- `<$CreativeCommonsNdLg>`





## CreativeCommonsNd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsNd
include('fontawesome/Brands/CreativeCommonsNd')

' renders the element
CreativeCommonsNd('CreativeCommonsNd', 'Creative Commons Nd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsNd
include('fontawesome/Brands/CreativeCommonsNd')

' renders the element
CreativeCommonsNd('CreativeCommonsNd', 'Creative Commons Nd', 'an optional tech label', 'an optional description')
@enduml
```

