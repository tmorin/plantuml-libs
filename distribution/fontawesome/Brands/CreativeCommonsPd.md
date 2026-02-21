# CreativeCommonsPd


```text
fontawesome/Brands/CreativeCommonsPd
```

```text
include('fontawesome/Brands/CreativeCommonsPd')
```



| Illustration | CreativeCommonsPd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsPd.png) | ![illustration for CreativeCommonsPd](../../fontawesome/Brands/CreativeCommonsPd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsPdXs>`
- `<$CreativeCommonsPdSm>`
- `<$CreativeCommonsPdMd>`
- `<$CreativeCommonsPdLg>`





## CreativeCommonsPd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsPd
include('fontawesome/Brands/CreativeCommonsPd')

' renders the element
CreativeCommonsPd('CreativeCommonsPd', 'Creative Commons Pd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsPd
include('fontawesome/Brands/CreativeCommonsPd')

' renders the element
CreativeCommonsPd('CreativeCommonsPd', 'Creative Commons Pd', 'an optional tech label', 'an optional description')
@enduml
```

