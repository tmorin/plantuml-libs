# CreativeCommonsPd


```text
fontawesome-6/Brands/CreativeCommonsPd
```

```text
include('fontawesome-6/Brands/CreativeCommonsPd')
```



| Illustration | CreativeCommonsPd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsPd.png) | ![illustration for CreativeCommonsPd](../../fontawesome-6/Brands/CreativeCommonsPd.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsPd
include('fontawesome-6/Brands/CreativeCommonsPd')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsPd
include('fontawesome-6/Brands/CreativeCommonsPd')

' renders the element
CreativeCommonsPd('CreativeCommonsPd', 'Creative Commons Pd', 'an optional tech label', 'an optional description')
@enduml
```

