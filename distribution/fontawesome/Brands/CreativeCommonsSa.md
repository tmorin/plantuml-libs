# CreativeCommonsSa


```text
fontawesome/Brands/CreativeCommonsSa
```

```text
include('fontawesome/Brands/CreativeCommonsSa')
```



| Illustration | CreativeCommonsSa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsSa.png) | ![illustration for CreativeCommonsSa](../../fontawesome/Brands/CreativeCommonsSa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsSaXs>`
- `<$CreativeCommonsSaSm>`
- `<$CreativeCommonsSaMd>`
- `<$CreativeCommonsSaLg>`





## CreativeCommonsSa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsSa
include('fontawesome/Brands/CreativeCommonsSa')

' renders the element
CreativeCommonsSa('CreativeCommonsSa', 'Creative Commons Sa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsSa
include('fontawesome/Brands/CreativeCommonsSa')

' renders the element
CreativeCommonsSa('CreativeCommonsSa', 'Creative Commons Sa', 'an optional tech label', 'an optional description')
@enduml
```

